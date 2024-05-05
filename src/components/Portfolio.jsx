import Single from "./SingleProject";
function Portfolio(){
    const centered = {
        textAlign: "center"
      };
      return(
            <section className="meetMe">
            <h2 style={centered}>Portfolio</h2>
            <div className="grid">
                <Single image="https://ziubinski.pl/wp-content/uploads/2024/05/all-devices-white-4.png" name="Best Of Cars" description="Strona Warszaskiej wypożyczalni samochodów" />
                <Single image="https://ziubinski.pl/wp-content/uploads/2024/04/all-devices-white-1.png" name="Salon KOKO" description="Sklep Internetowy lokalnego butiku" />
                <Single image="https://ziubinski.pl/wp-content/uploads/2024/04/all-devices-white-2.png" name="Amitie Butik" description="Sklep Internetowy butiku Internetowego" />
                <Single image="https://ziubinski.pl/wp-content/uploads/2024/05/all-devices-white-3.png" name="Flak-pol" description="Strona prezentująca katalog produktów producenta flaków" />

            </div>
        </section>
      )

}
export default Portfolio;