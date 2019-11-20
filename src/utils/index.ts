export class Utils {
  static generatePaging(numberItems: number, currentPage: number, data: any) {
    let totalPages = 1;
    let previousPage = false;
    let nextPage = false;

    if (Math.floor(data.total / numberItems) === data.total / numberItems) {
      totalPages = data.total / numberItems;
    } else {
      totalPages = Math.floor(data.total / numberItems) + 1;
    }

    if (totalPages > currentPage) {
      nextPage = true;
    }

    if (currentPage > 1) {
      previousPage = true;
    }

    const paginationData = {
      totalItems: data.total,
      totalItemsOnPage: data.results.length,
      totalPages: totalPages,
      previousPage: previousPage,
      currentPage: Number(currentPage),
      nextPage: nextPage
    };
    return paginationData;
  }
}
