export default function allPlaylistsResponse({ data }){
    return data.items.map((item)=>{
        return (
            {
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.standard,
                count: item.contentDetails.itemCount
            }
        )
    })
}