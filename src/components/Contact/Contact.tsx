import { Button } from "@mui/material"
import { Bounce, toast } from "react-toastify"

function Contact() {

  const handleClick = () => {
    toast.error("Mesaj gönderilmedi. Hocam öylesine koydum", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  return (
    <div>
      <form className="space-y-4">
        <input
          type="text"
          name="Ad-Soyad"
          placeholder="Your Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email adresiniz"
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="Konu"
          placeholder="Subject"
          className="border p-2 w-full rounded"
        />
        <textarea
          name="message"
          placeholder="Mesaj"
          className="border p-2 w-full rounded"
          rows={5}
          required
        ></textarea>
        <Button
          type="button"
          fullWidth
          variant="contained"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-102"
          onClick={handleClick}
        >
          Gönder
        </Button>
      </form>
    </div>
  )
}

export default Contact
