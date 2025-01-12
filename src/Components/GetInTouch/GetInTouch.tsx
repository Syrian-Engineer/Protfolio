import Socials from "./Socials"

const GetInTouch = () => {
  return (
    <div className="section relative flex flex-col justify-center items-center w-[50rem] h-[38rem] gap-32 " id="Get In Touch">
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur distinctio magnam veniam dolore in ipsam iste laborum rerum veritatis, illum totam ipsum itaque reprehenderit! Iusto natus eveniet voluptatum</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center w-full ">
            {/* Row 1: First half of social icons */}
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <Socials title="GitHub" imgUrl="/Images/github.png" link="https://github.com/Syrian-Engineer" />
                <Socials title="LinkedIn" imgUrl="/Images/linkedin.png" link="https://www.linkedin.com/in/koussai-kareem-al-deen-a77875307/" />
                <Socials title="Twitter" imgUrl="/Images/twitter.png" link="https://x.com/KoussaiKareem1" />
                <Socials title="faceBook" imgUrl="/Images/facebook.png" link="https://www.facebook.com/profile.php?id=61553936758848" />
                <Socials title="Whatsapp" imgUrl="/Images/whatsapp.png" link="https://wa.me/+963951247728" />
            </div>
            <div className="flex gap-2 flex-wrap w-full justify-center">
                <Socials title="Instagram" imgUrl="/Images/Instagram.png" link="https://www.instagram.com/koussaikareem_aldeen" />
            </div>
        </div>
        <div className="absolute bottom-0">
        </div>
    </div>
  )
}

export default GetInTouch