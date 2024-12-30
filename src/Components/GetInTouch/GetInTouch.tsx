import Socials from "./Socials"

const GetInTouch = () => {
  return (
    <div className=" relative flex flex-col justify-center items-center w-[50rem] h-[30rem] gap-32" id="Get In Touch">
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur distinctio magnam veniam dolore in ipsam iste laborum rerum veritatis, illum totam ipsum itaque reprehenderit! Iusto natus eveniet voluptatum</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center w-full ">
            {/* Row 1: First half of social icons */}
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <Socials title="GitHub" imgUrl="/src/assets/github.png" link="https://github.com/Syrian-Engineer" />
                <Socials title="LinkedIn" imgUrl="/src/assets/linkedin.png" link="https://www.linkedin.com/in/koussai-kareem-al-deen-a77875307/" />
                <Socials title="Twitter" imgUrl="/src/assets/twitter.png" link="https://x.com/KoussaiKareem1" />
                <Socials title="faceBook" imgUrl="/src/assets/facebook.png" link="https://www.facebook.com/profile.php?id=61553936758848" />
                <Socials title="Whatsapp" imgUrl="/src/assets/whatsapp.png" link="https://wa.me/+963951247728" />
            </div>
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <Socials title="Instagram" imgUrl="/src/assets/Instagram.png" link="https://www.instagram.com/koussaikareem_aldeen" />
                <Socials title="Deviantart" imgUrl="/src/assets/deviantart.png" link="https://www.deviantart.com/" />
                <Socials title="Vimeo" imgUrl="/src/assets/vimeo.png" link="https://vimeo.com/" />
            </div>
        </div>
        <div className="absolute bottom-0">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestias!</p>
        </div>
    </div>
  )
}

export default GetInTouch