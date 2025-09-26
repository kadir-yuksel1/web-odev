import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { useState } from "react"

function About() {

  const [recommend, setRecommend] = useState(false)

  const handleClick = () => {
    setRecommend(!recommend)

  }

  return (
    <div>
      {recommend ? (
        <div>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/AyCjSSTvjBQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div>
          <Card className="flex flex-col justify-evenly items-center w-100 h-100">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="text-center font-bold">
                  About
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} className="text-xl text-justify">
                  Merhaba! Ben Kadir Yüksel. Süleyman Demirel Üniversitesinde Bilgisayar mühendisliği öğrencisiyim ve teknolojiyle uğraşmayı gerçekten seviyorum. Kod yazmak, yeni şeyler öğrenmek ve projelerle uğraşmak hayatımın bir parçası.
                  Bunun yanında sporu da hayatımdan eksik etmiyorum; hem zihnimi boşaltıyor hem de daha enerjik hissettiriyor. Boş zamanlarımda film ve dizi izlemek de vazgeçilmezlerimden. Kimi zaman yeni şeyler öğrenirken, kimi zaman da sadece kafa dağıtmak için ekran karşısına geçiyorum.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                color="primary"
                variant="contained"
                className="w-full transform transition-transform duration-300 hover:scale-105"
                onClick={handleClick}
              >
                Şarkı Önerisi
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
export default About