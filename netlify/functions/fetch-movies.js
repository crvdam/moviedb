exports.handler = async (event, context) => {
  const API_KEY = process.env.TMDB_API_KEY

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not configured" })
    }
  }

  const { endpoint, query, page } = event.queryStringParameters || {}

  if (!endpoint) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Endpoint parameter is required" })
    }
  }

  const params = new URLSearchParams({
    language: "en-US",
    ...(page && { page }),
    ...(query && { query, include_adult: "false" })
  })

  const url = `https://api.themoviedb.org/3/${endpoint}?${params.toString()}`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch from TMDB", details: error.message })
    }
  }
}
