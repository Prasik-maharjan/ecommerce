import { rating } from "../../data/Homedata";

function Rating({ rating }) {
  return (
    <div className="bg-white flex-1 py-7 px-12  rounded-lg">
      <div className="mb-7">
        <img
          className="w-20"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAQEQ4QEBAVEBUQFRUSDxUSFhYXFRUWFhYRFRUaHSkgGBslGxYXITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGy0lICYwLS0tKy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAEDAv/EADkQAAIBAwEEBwYGAgIDAQAAAAABAgMEEQUGEiExBxNBUWGBkRQiMmJxsSNScoKhwULRsvAzQ1Mk/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQYCAf/EACkRAQACAgEEAgICAwEBAQAAAAABAgMRBAUSITETQSIyI1FhcYFCkRT/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Aj9H1ilddb1bz1dR035cpLwZHjy1vvX0hw56Zd9v14SJImAAAABG6rrFK2lRjUeHVqdWvD5n4ZaXmiLJlrTUT9oMuemOYi32kUSp3oAAAA8bxxBM6R+iaxSu6cqlJ5Uakqb8uT+jWGvBkWLLXJG6ocOemaN1SJKmAAAABG6hrNKhWoUZv3q0nGPhjk39W0vqyK+WtbRWftBkz0patZ+0kSpwAAAAfipUUYuTeEk22+xLmz5M6jb5MxEblx6JqtO7oqtT+Ftxw+aaeOP8PzPGPJGSNwjw5q5a91XeSJQAAAAAAFe231j2W1luvFSp+HDHNZXvS8l/RW5WX46ePcqPUOR8OKf7lQNiNX9muoqTxTqYpy7ll+7Lyb/lmdxcvZf/bC6byfiy6n1LXzadW9AAAPGwMc2w1f2q7nJP8ADg3Th9E+Ml9Xx9DE5OWb33/Tkuocqcmbx6j00fY7V/arWEm/xI/hz+q/y81hmnxsvyU26Hg5/mxRP2nSwuAAABVukDWOotnTi/xKuYLHZHHvS9OHmVOXl7Kaj3LN6lyfixaj3Kn7Aax1F0qcninWxB9yl/g/680UuJl7L6+pZPSuT8eTsn1LWDYdQ9AAAPJSSTbeEllnyfD5M69sW2l1h3N3Osm1FPdp+EYvg/Xj5mJmy9+Tu/8AjkeZypyZ+6Pr01TZfVVdWtOr/n8M13Sjwfrz8zWwZPkpEum4meM2KLJUmWXoAABT+kfV+qoKhF+/Vznwgvi9eC9SlzMvbXtj7ZXVeT8ePsj3KvdHOsdVcOhJ+5V5dymlw9UseSK3Cy9tu3+2f0nk9t/jn1LUDWdK9AAAAEBq+11rbVHSqdbvrsVN449qbwmivk5VMc6lSz87Fhtq20JcdJFJZ3Lacv1TUftkr258fUKV+s0j9YU/aTXql7UjOUVBRjuxipOSXa3nC4vh6FLNmnLO5ZHM5luRbc+EQRKUTqdrxpnSHOnCEKtup7sVFzVTDeOGXFrH8l7HzpiNTDdw9YmtYrav/Uxb9Ido/jp1YeSl9mTxzsf2uV6vgn3tPS1yirb2rFTqeeeqlnH5t3GcePIsfLHb3fS/89Yp3+dIC46Q7WPwU6s/JR+7K086n0oW6vhj1tC6t0gTq0506dBU96LjvuplrPNpJY/kgyc21o1EKWfrE2rNa1UoosOZ2mdmtoaljOUowVSMlhxcnFcOTyk+PMnw57Yp8L3D5tuNM6jcLdb9I9J437ace/dnGS/nBcrz4+4a1Os45/aNJzR9q7a6mqdNVd/nh03hJdrkuCX1LGLk0yTqq9g52LNOqPnqm2Nrb1JU5qrvx5rq2vRvCaPmTlUpOpec3PxYbdtt7/0hbjpIprPV205frmo/bJBbnx/5hSv1mkfrXam7QazO8rdbOKj7qjGKeUl9cd5SzZZyW3LH5fLtyL90o2Lw8rnzIlWtu2dwvVh0jSjGMatspYik5RqcW0ue61/ZfpzpjxMN3F1nUatVLW/SFaS+KFWH7VL7MmjnY59rdOrYbe9p251yjTt43MlVVKXJ9VPKzybjjKXiyxbLWK90+l6/IrWnfO9K/cdIlqvgpVZ+UY/dlaedT6ULdXwx+vlB63t5Ur0qlKFBUlNbrl1jlLD5rCWOXiV8vNtaO2IUeR1eb1mta6U0pMVO7M7S1LFz3YKpCeMxc3Hiu1PD7Cxgzzi9L/D59uPuNbhbLfpHovG/b1I/plGX+i3XnV+4a1Os45/aNJ3Rdp7a7luUus3ksvNNpJd7lyLOLkUyTqq/x+Zjzfo5dR21tKE5U5Kq5xbTXVtcV4yweL8ulJ1KLN1HDit223v/AEh7jpIgv/Hayf66ij9kyC3Pj6hTv1msfrVS9c1Wd3XlWmlFvCUU8qKXJJ/95lLLknJbuli8rkznv3S4aVRxkpReJJpprsa4pkcTqdoKXmlotC+WnSQ0kqlrnguMKvPxw1/Zfrz5+6t7H1rx+VUpb9INnLG9GrD9ql9mTRzscrVOrYLf2tVtWVSEZpSSksrei4vD70+KLkTuNtKtu6NvqfXoAh9o9ApXtPdl7tRcYTXOL7vFeBDmwVyx59qnK4lORXU+2RapptW2qypVY7sl6Nfmi+1GLfHNJ1Lk+Rx74bdtnGeUAAPgu2xmx/W7txcR/D4ShB59/tUpfL4dv0L/ABuLv8rt3p/Te7+TJHj6hpDprG7hbuMYxwx3YNPUenQdsa0zPbTZJ0G69COaPFziv/X4r5fsZXJ43b+VfTneo9O7P5Mfr7U0psQAAd2j6VVuqqpUo5fNt8or80me8eOck6hZ43GvntqrX9A0SlZ0tyCzJ8ZTfOT/AKXgbOHDGONQ6zjcamCvbVz7T7O0r2nh4jVinuT7vll3xPmfBGWP8vHL4lORXU+/7ZHqFjUoVJUqsd2cea/tPtXiY16TSdS5PNgtit22cx5QgAERtftitkM7tzcx4cJU6b7e6c19kaHG4v8A7u6Hp3TtfyZP+NAqUoyi4tJxaw01lNd2DRmImNNuaxMall22Oybtm61FN275rm6fg/l8ewyeTxpp5r6c31Dp3x/nT0qRUY4AAkND0ird1VTprucpPlCPe/6XaSYsU5Laha4vFvnvqrYNE0elaUlTprxlJ85PvbNnFirjjUOt4/Hphp21R+1ezFO8hvRxCvFPdl3/ACSxzXj2EfI48ZI39q/M4Vc8b+2TXlrUo1JU6kXGcXhp/wDeK8THtWazqXK5cNsVu2z4HxEAEg+xG/ENE2L2P3d25uY+9zp032d05rv7l2fXlo8bi6/K7oun9Niv8mT39QviNFtvQAACm9Jyp+ywbit/rUovtSw3JJ+OCjztdjJ6v2/Dv7ZgZblw+CQ2f3Pa6G/FSg6sU1JZTy8cfNkuLXfG1rha+au24JG87R6B+ZpNNNZWD4+T68sM1jc9orbkVGHWzUUuSSk1wMDJrvnTiuV2/Lbt9bcZ5VwDVOjVQ9jbUUpdZJSa5vtWfJmtwtfG6vpXb8HiFtLjTAKN0pKCpUXurrHNpSxxUVF5We7LRn8/Wo/tjdZ7fjjx5ZuZjmg+iX2S3He26qRUoueMNZWcPD9cEvH18kbXen9vzx3NpwbrsXoH4rRTi1JJxaaafFNdqZ8n0821MTthF64urU3UlHflhLkll4Xoc/f9p04jka+S2vT4HxEHwa10eqn7DBwik96Sm0uLak+L8sGxw9fFGnXdMivwRr/qzltoAGfdKah/+f3Y773uPburHD6ZZm8/Xj+2F1nt1X+2fmc54An9hlD2+ipxUk84ys+9htPywWeLr5Y20el9vzx3NiNp1oAAAAM86Vbj3ral8s6j9VFf2ZvPt5rDB61f9awr+h7KXV1iSh1dL888pftXOX2K+LjXyf4hn8bpuXN5nxCd1Xo8nGClb1esklxjPEcv5WuHk/UnvwZiN1lez9H1XeOfKm16FW3qYnCUJwaliSxyeU138ilNZrbyyfjvhyR3R6bpb1FKEZLlKKl6rJvVncRLtKW7qxL6Hp6c9/XVOlUqPlGnKXomzzedVmXjJPbSZYdZ2ta4nu04SqVHxais8+19y+pg0ra86hxdcWTNfVY2umm9Hc5Qbr1lCbXCMFvYfzN8/L1LtODMx+UtjD0f8f5J8q9rey11aZcob9P88MtY+Zc4/bxK+Xj3x/6UOR07Lh8+4WfoqueFzS7nCov3Jxf/ABRa4FvcNLo1vxtWV/NFuAGadKVzm4o08/DSc3++WF/wZl8+27xDnus23etYReh7H3VziTj1NL8008v9Meb/AIIcXFvfz6hV43TMuXzbxCX1jo9qQjvW9TrMLjCeIyfjF8vJ+pNk4Mx+krfI6PMRvHKo01Utq8HOMoTpzjNprDxGSb8uDKcRNLRtlUpfDljujWpbrF5WTfid+XaRO429Pr64ddueqtbip+WjOXpF4I8tu2kyh5F+zFa3+GLafp9avPq6VOVSXbjs8W+S8zDpS151EOPxcfJltqsLnY9HUnTbrV1Gq1wUFvRj+pvn5YL1eDMx+U+Wxi6N+P5z5VrW9mrq0y6kN6n/APSHGPn2x8yrk498ftm8ngZcPnW4/tcui25zQr02/hqqS+k4/wC4su8C34zDY6NbeKY/yu5fbABlvSZcb15CH5KMfWcm/skZPNneSIc11i02yxWPpy6FsZdXOJSXU0ueZr3mvlhz83jzPGLiXv5nxCLjdLyZfNvEJHW+j+rBb9vPrUlxhLEZ+T5P+CXJwpj9FjkdItEbxyrWlSnb3lFzi4ShWhvKSw0t5J5X0bKtJmt43/bP48WxZ690a8twN52QAAAAI2votvUrq4qU1OooqMd7iopNvhHlnLfEjtira3dKG2DHa/faNykUiRM9A49S0yjcQ3K1OM14rivFPmjxfHW8atCLJhpkjVo2+1nbqlThTi24wioLLy8RWFlnqsajUPdaxWsRD7H16c9/aRrUp0p53JxcJYeHh8Gs/Q82rFo1LxekXrNZfmw0+jQhuUqcYR8Fz8W+0+UpWkaiHzHipjjVY06T2kGj4TG0faaLQpVpV6cOrnKO7JR4RfHOXHv/ANniuKtbd0IaYKUtNqxpIkiYAjZ6JbyuHczpqdXEYpy4qKjnG6uS5vj4kU4qzbumPKCePjm/fMeUiiVOAcOq6RQuoblamprsfKSz3S5ojvirePMIsuCmSNWh10Ke7GMU20ko5fPgsZZ7iNRp7rGo0+h9enLqVlC4pSpTzuSwpYeMpNPGe54PN6RaNS8ZMcZK9s+n6srKlRgoUqcYRXZFY833itK1jUFMdaRqsadB6e35lFNYayvE+S+TET4lwWGjUKFWpVpQ6t1ElJR4ReG2mo9j4vl3nimKtZ3CLHgpjtNqxraRJEwBGw0S3VxO5dNSrSx70uO7hJJRXZwRF8VO7u15Q/8A58ffN5jykSVMAR+raLb3Ud2tTUu6S4SX0lzRHfFW/uEOXBTJ+0JCCwkvDB7hLEajT0+voAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
          alt="star"
        />
        <h1 className="font-semibold text-lg">Best Online Fashoin Site</h1>
        <p className=" py-2">
          "I always find something stylish and  affordable on this web
          electronic site"
        </p>
        <h2 className="text-sm font-bold">{rating.customer}</h2>
        <p className="text-sm">Customer from France</p>
      </div>
      <div className="flex">
        <div>
          <img className="w-20" src={rating.image} alt="product" /> 
        </div>
        <div className="ml-3 pr-6">
          <h1 className="text-sm">{rating.heading}</h1>
          <p className="text-xs font-bold">{rating.price}</p>
        </div>
      </div>
    </div>
  );
}

export function Client() {
  return (
    <div>
      <div className="my-20 py-16 px-10 bg-[#f5f5f5]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl py-3">Happy Clients</h1>
          <p>
            See what our satisfied customers have to say about our electronic
            accessories.
          </p>
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-7">
          {rating.map((r, i) => (
            <Rating key={i} rating={r} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
