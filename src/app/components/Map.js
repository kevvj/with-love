const Map = () => {
    return (
        <div className="map-container">
            <div className="map">
                <h2>Encuentranos en</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d985.9040228144054!2d-75.8744438928492!3d8.727955487764799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d8.7283213!2d-75.8742159!5e0!3m2!1ses!2sco!4v1734904825065!5m2!1ses!2sco"
                    width="600"
                    height="450"
                    className="iframe-map"
                ></iframe>


            </div>
        </div>
    );
};

export default Map;
