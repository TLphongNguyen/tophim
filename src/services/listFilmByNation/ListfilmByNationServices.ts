import ServicesBase from "../baseServices";
class ListFilmByNationServices extends ServicesBase {
  constructor(baseURL: string, onUnauthenticated: () => void) {
    super(baseURL, onUnauthenticated);
  }

  getListFilmChina() {
    return this.service.get(
      "/v1/api/quoc-gia/trung-quoc?page=1&sort_field=year&sort_type=desc&limit=10"
    );
  }
  getListFilmKorea() {
    return this.service.get(
      "/v1/api/quoc-gia/han-quoc?page=1&sort_field=year&sort_type=desc&limit=10"
    );
  }
  getListFilmUsUk() {
    return this.service.get(
      "/v1/api/quoc-gia/viet-nam?page=1&sort_field=year&sort_type=desc&limit=10"
    );
  }
  getlistfilmSeries() {
    return this.service.get(
      "/v1/api/danh-sach/phim-bo?page=1&sort_field=year&sort_type=desc&limit=10"
    );
  }
}
export default ListFilmByNationServices;
