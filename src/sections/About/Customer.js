export function Customer(){
    return(
        <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="flex-1">
                <h1 className="text-4xl py-7">Our's customer's reviews</h1>
                <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-r1oNxyNk1BvuWGlXv12sh3WQKd8YtSU2g&s" alt=""/>
                <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV73p8esFJwwB2DIQV2Du6Ht6TFy1wmnfmsQ&s" alt=""/>
            <p className="text-lg">A review of electronics typically involves evaluating various electronic devices and technologies, often to help consumers make informed purchasing decisions or to analyze advancements in the field. It can also refer to reviews of electronic products, like those found on websites  like Consumer Reports, PCMag, or Engadget. </p>
            <p className="font-semibold">Sandra</p>
            </div>
            <div className="flex-1">
                <img className="rounded-xl" src="https://ecomus.magentech.com/pub/media/wysiwyg/about-us/abu4.jpg" alt=""/>
            </div>
        </div>
    )
}