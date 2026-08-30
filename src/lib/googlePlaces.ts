export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface PlaceDetailsResult {
  reviews?: GoogleReview[];
  rating?: number;
  user_ratings_total?: number;
}

interface PlaceDetailsResponse {
  result?: PlaceDetailsResult;
  status: string;
}

interface GoogleReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
}

let cache: GoogleReviewsData | null = null;

// Build-time çağrılır: API anahtarı tarayıcıya sızmaz, sonuç statik HTML'e gömülür.
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  if (cache) return cache;

  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    cache = { reviews: [], rating: 0, totalReviews: 0 };
    return cache;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=tr&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as PlaceDetailsResponse;

    cache = {
      reviews: data.result?.reviews ?? [],
      rating: data.result?.rating ?? 0,
      totalReviews: data.result?.user_ratings_total ?? 0,
    };
  } catch (error) {
    console.error('Google Places API çağrısı başarısız:', error);
    cache = { reviews: [], rating: 0, totalReviews: 0 };
  }

  return cache;
}
