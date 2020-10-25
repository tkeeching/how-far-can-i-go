import { MapControl } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

class SearchControl extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: "bar",
      searchLabel: `${this.props.searchLabel}`,
      autoClose: true,
      retainZoomLevel: true,
      classNames: {
        input: "input",
      },
    });
  }
}

export default SearchControl;
