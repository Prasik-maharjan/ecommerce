import { blogs } from "../data/Blogdata";

function Blogs({ blogs }) {
  return (
    <div>
      <div className="overflow-hidden relative rounded-xl">
        <img
          className="z-0 hover:z-10 transition-transform duration-[1.2s] hover:scale-110"
          src={blogs.image}
          alt="blog-img"
        />
        <p className="absolute bottom-5 left-5 bg-white text-[10px] font-bold rounded-sm px-3 py-2">
          July 30,2025
        </p>
      </div>
      <div>
        <p className="text-[20px] pr-1 py-5 hover:text-[#e72d33]">
          {blogs.desc}
        </p>
      </div>
      <div className="hover:text-[#e72d33] items-center flex">
        <button className="font-semibold text-sm">Read more </button>
        <img
          className="w-4 h-4 hover:text-[#e62626]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///8AAADv7+/i4uKCgoJZWVl+fn6GhoZ3d3dVVVVISEhWVlZ/f397e3tRUVFMTEz09PShoaFeXl61tbVxcXFCQkJDzMQFAAACxUlEQVR4nO3d23ITMRBFUQMOxpAL1///VZDTYDmMPNJIU+rTtddr8pBdo3bL5UpyOAAAAAAAAAAAAAAAAAAAADj39f2eZtclj+/29GF23h8nCimkcDoKKaRwPgoppHA+CimkcL5j+MJv54ftvisUdlk94uqFHyVOaYf1QPHCT+uB2oVPFYHShRVHVLuw6gkqF9bMoHRh3REVLqwOVC2snEHdwoZAzcL6IypaWA58WPgoUrCwvCbOS+809ArLM3hefDMtV1g+op8PIQrLT/A5fVm/sDyDXy5fly8sH9Hn129QL7w/g4l44b01YbQL764JI11YPqIv129SLiw/wSxQubBiBhPdwvIRvQnULVxfE0a1cOWqlhEtXLuqZTQLV69qGcnC6hlMFAsr14QRLKy5qmX0Cquuahm5wrqrWkatsG0GE7HCljVhtAqb1oSRKqy/qmWUChvXhBEqbF0TRqdwY6BOYfuaMCqF22YwESncsiaMRuGmNWEkChve0f9PoXDDVS0jUNgxg4n/ws1rwrgv3L4mjPfCrTeZK+eF/YHOC3tnMHFd2D2DiefCzjVhHBf2XNUyfgu7rmoZt4V9V7WM18IxM5g4LRyxJozPwiFrwrgsHHCTufJY2Pzhy10OCwfOYOKvcNiaMO4Kx60J461w0FUt46xw5JowvgqHrgnjqnCPQFeFg9eEcVS4wwwmCwdjUuHwNWF+HE9vPM7545fj14Qzo97RuzX6qubOXjPoxj5rwpGd1oQfu9xkPAkfyAyqC78muKqp46qmjjWhLvxNZuyHLw6Fn8HaX1KWFX5NhL+q/SwGBrmqlR9hkCd4KP6noyAzeLH4l4yDvIqahY+DYgUuHNRIR/TVm6cY50Xm6mYWo6yJW8fYTzD5N4vxZvCvY8xX0dwpeuDloAZ5w1v09Gv2TwAAAAAAAAAAAAAAAAAAAIDRfgMStiNu+P07UQAAAABJRU5ErkJggg=="
          alt="iconn"
        />
      </div>
    </div>
  );
}

export function Blog() {
  return (
    <div className="pt-16">
      <div className="flex flex-col text-center py-20 bg-pink-50">
        <h1 className="text-4xl">Blog</h1>
        <p>Home / Blog </p>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-7 m-10">
        {blogs.map((b, i) => (
          <Blogs key={i} blogs={b} />
        ))}
      </div>
    </div>
  );
}
