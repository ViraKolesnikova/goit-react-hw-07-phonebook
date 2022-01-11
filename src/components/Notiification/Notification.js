import { useEffect, useState } from "react"


export default function Notification({message}) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
   return setTimeout(() => {
      setShouldRender(false);
    }, 3000); 
  })

  return (
    <>
    {shouldRender && <p style={{color:'blue'}}>{message}</p>}
    </>
  )
}