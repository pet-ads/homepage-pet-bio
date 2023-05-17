import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Collapsible from 'react-collapsible'
import "./Faq.css"


export default function Faq(){
    return(

        <body>
            <MenuNavegacao></MenuNavegacao>
            
            <h2 className="faq-titulo">Projetos desenvolvidos pelo PET</h2>
            <section>

                <Collapsible trigger="read umineko no naku koro ni (click here)" transitionTime='100'>
                    <p>
                    Behold the sweetfish river running through my beloved hometown.
                    You who seek the Golden Land, follow its path downstream in search of the key. 
                    </p>
                </Collapsible>

                <Collapsible trigger="read umineko no naku koro ni (click here)" transitionTime='100'>
                    <p>
                    As you travel down it, you will see a village.
                    In that village, look for the shore the two will tell you of.
                    There sleeps the key to the Golden Land.

                    The one who obtains the key must then travel to the Golden Land in accordance with these rules. 
                    </p>
                </Collapsible>

                <Collapsible trigger="read umineko no naku koro ni (click here)">
                    <p>
                    On the first twilight, offer the six chosen by the key as sacrifices.
                    On the second twilight, those who remain shall tear apart the two who are close.
                    On the third twilight, those who remain shall praise my noble name.
                    On the fourth twilight, gouge the head and kill.
                    On the fifth twilight, gouge the chest and kill.
                    </p>
                </Collapsible>

                <Collapsible trigger="read umineko no naku koro ni (click here)">
                    <p>
                    On the sixth twilight, gouge the stomach and kill.
                    On the seventh twilight, gouge the knee and kill.
                    On the eighth twilight, gouge the leg and kill.
                    On the ninth twilight, the witch shall revive, and none shall be left alive.
                    On the tenth twilight, at journey's end, you shall attain to the power of the Golden Land's treasures, once and for the last time. 
                    </p>
                </Collapsible>

                <Collapsible trigger="read umineko no naku koro ni (click here)">
                    <p>
                    The witch shall praise the wise and bestow four treasures.
                    One shall be all the gold from the Golden Land.
                    One shall be the resurrection of all the dead souls.
                    One shall be the resurrection of the love that was lost.
                    One shall be to put the witch to sleep for all time. 
                    </p>
                </Collapsible>

                <Collapsible trigger="read umineko no naku koro ni (click here)">
                    <p>
                    Sleep peacefully, my beloved witch, Beatrice. 
                    </p>
                </Collapsible>


            </section> e

            
        </body>
    )
}