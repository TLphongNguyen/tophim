import ServicesBase from "../baseServices";
class ListFilmByNationServices extends ServicesBase {
  constructor(baseURL: string, onUnauthenticated: () => void) {
    super(baseURL, onUnauthenticated);
  }

  getListFilmChina() {
    return this.service.get(
      "/v1/api/quoc-gia/trung-quoc?page=1&sort_field=modified.time&sort_type=asc&limit=10"
    );
  }
  getListFilmKorea() {
    return this.service.get(
      "/v1/api/quoc-gia/han-quoc?page=1&sort_field=modified.time&sort_type=asc&limit=10"
    );
  }
  getListFilmUsUk() {
    return this.service.get(
      "/v1/api/quoc-gia/viet-nam?page=1&sort_field=modified.time&sort_type=asc&limit=10"
    );
  }
}
export default ListFilmByNationServices;
