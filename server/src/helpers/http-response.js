export default function makeHttpResponse ({ statusCode, data }) {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode,
      data: JSON.stringify({
        success: true,
        data: data
      })
    }
  }