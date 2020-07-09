export interface Review {
  REVIEW_ID: number;
  VALUE?: number;
  COMMENT?: string;
  REVIEW_DATE: Date;
  BOOKS_BOOK_ID: number;
  TUSERS_USER: string;
}
