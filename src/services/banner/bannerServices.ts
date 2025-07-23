import ServicesBase from "../baseServices";

class BannerServices extends ServicesBase {
  constructor(baseUrl: string, onUnauthenticated: () => void) {
    super(baseUrl, onUnauthenticated);
  }

  getTopfilmList() {
    return this.service.get(
      "/v1/api/danh-sach/phim-le?page=1&sort_field=modified.time&sort_type=desc&limit=5"
    );
  }
  getfilmbyslug(slug: string) {
    return this.service.get(`/phim/${slug}`);
  }
}
export default BannerServices;
