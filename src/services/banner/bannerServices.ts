import ServicesBase from "../baseServices";

class BannerServices extends ServicesBase {
  constructor(baseUrl: string, onUnauthenticated: () => void) {
    super(baseUrl, onUnauthenticated);
  }

  getTopfilmList() {
    return this.service.get(
      "/v1/api/danh-sach/phim-chieu-rap?page=1&sort_field=year&sort_type=desc&limit=6"
    );
  }
  getfilmbyslug(slug: string) {
    return this.service.get(`/phim/${slug}`);
  }
}
export default BannerServices;
