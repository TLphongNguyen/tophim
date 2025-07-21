import BaseService from "@/services/baseServices";

class CategoryServices extends BaseService {
  constructor(baseURL: string, onUnauthenticated: () => void) {
    super(baseURL, onUnauthenticated);
  }
  getCategoryList() {
    return this.service.get("/the-loai");
  }
  getNationalList() {
    return this.service.get("/quoc-gia");
  }
}
export default CategoryServices;
