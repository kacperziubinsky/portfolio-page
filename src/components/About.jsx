
import Image from "./image";
function About(){
    const centered = {
        textAlign: "center"
      };

    
    return(
        <>
            <section className="about">
                <div className="aboutText">
                    <Image image="https://ziubinski.pl/wp-content/uploads/2024/04/beta_main_webpage.png" />
                        <h1>Kacper Ziubiński</h1>
                        <h2>⭐Web Developer⭐</h2>
                        <p className="textPrimary"><strong>Posiadam ponad 3 letnie komercyjne doświadczenie jako Web Developer.</strong> W swojej karierze zawodowej miałem okazje współpracować z klientami indywiduanymi, jak i również z firmami w modelu B2B.</p>

                </div>

            </section>


            <section className="meetMe">
                <h2 style={centered}>Poznajmy się lepiej!</h2>
            <p>
                <strong>Jestem WebDeveloperem, który nie boi się wyzwań</strong> - to właśnie one mnie motywują do działania. Podczas ostatnich 3 lat komercyjnej pracy miałem okazje realizować projekty dla klientów indywidualnych jak i również podczas współpracy z firmami, dzięki czemu miałem możliwość zdobyć cenne doświadczenie.
            </p>
            <p>
                Większość realizowanych projektów oparta była o <strong>Wordpress'a</strong>, z tej racji nie są mi obce page-buildery typu <strong>Elementor, Wp Bakery, Gutenberg</strong>. Mialem również przyjemność <strong>tworzyć dedykowane szablony wykorzystując ACF.</strong>
            </p>
            <p>
                Podczas realizacji wytycznych klienta staram się nie ograniczać technologicznie, <strong>nie uznaje usuwania problemów dodatkowymi wtyczkami,</strong> z tej racji stale poszerszam swoją wiedzę, tworząc również bardziej zaawansowane aplikacje webowe w oparciu o <strong>Vue, PHP, Node.</strong>
            </p>
            <p>
                <strong><i>Pss.: Jak już wspomniałem uwielbiam wyzwania - ta witryna też takowym jest, gdyż buduję ją w oparciu o REACT, ucząc się tym samym jego składni.</i></strong>
            </p>
            </section>
        </>
    );
}
export default About;