/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TokenObtainPair {
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  /**
   * Access
   * @minLength 1
   */
  access?: string;
}

export interface TokenVerify {
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface UserAccount {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 5
   * @maxLength 50
   */
  email: string;
  /**
   * Name
   * @minLength 2
   * @maxLength 50
   */
  name: string;
  /**
   * Номер телефона
   * @minLength 7
   * @maxLength 12
   */
  person_telephone?: string | null;
  /**
   * Surname
   * @minLength 2
   * @maxLength 50
   */
  surname?: string | null;
  /** Роль */
  role?: "contractor" | "client";
  notifications?: ("email" | "tel")[] | null;
}

export interface UserCreate {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 5
   * @maxLength 50
   */
  email: string;
  /**
   * Name
   * @minLength 2
   * @maxLength 50
   */
  name: string;
  /**
   * Номер телефона
   * @minLength 7
   * @maxLength 12
   */
  person_telephone?: string | null;
  /**
   * Surname
   * @minLength 2
   * @maxLength 50
   */
  surname?: string | null;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

export interface Activation {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface DisableNotifications {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface SendEmailReset {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface PasswordResetConfirm {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
}

export interface SetUsernameRetype {
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
  /**
   * Email
   * @format email
   * @minLength 5
   * @maxLength 50
   */
  new_email: string;
  /**
   * Re new email
   * @minLength 1
   */
  re_new_email: string;
}

export interface SetPasswordRetype {
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
  /**
   * Re new password
   * @minLength 1
   */
  re_new_password: string;
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
}

export interface Category {
  /** Id */
  id?: number;
  /** Тип - кухня, шкафы, кровати */
  name?: "kitchen" | "table" | "bedside_table" | null;
  /** Активная категория */
  active?: boolean;
}

export interface QuestionnaireShortType {
  /** Id */
  id?: number;
  /**
   * Тип анкеты - короткая, длинная
   * @minLength 1
   * @maxLength 100
   */
  type?: string | null;
  /**
   * Описание анкеты
   * @minLength 1
   * @maxLength 500
   */
  description?: string | null;
  /** Активная анкета */
  active?: boolean;
}

export interface Chat {
  /** ID */
  id?: number;
  /**
   * Client
   * @minLength 1
   */
  client: string;
  /**
   * Contractor
   * @minLength 1
   */
  contractor: string;
  /** Messages */
  messages?: string;
}

export interface CooperationOffer {
  /** Id */
  id?: number;
  /**
   * Имя компании
   * @maxLength 100
   */
  name?: string | null;
  /**
   * Телефон
   * @maxLength 12
   */
  telephone?: string | null;
  /**
   * Дата создания обращения
   * @format date-time
   */
  created?: string;
}

export interface ContactSupport {
  /** ID */
  id?: number;
  /**
   * Вопрос от пользователя
   * @maxLength 250
   */
  user_question?: string | null;
  /**
   * Ответ пользователю
   * @maxLength 250
   */
  admin_response?: string | null;
  /** Проблема решена? */
  resolved?: boolean;
}

export interface ContractorAgreement {
  /** User account */
  user_account: number;
  /**
   * Дата подписания соглашения
   * @format date-time
   */
  created_date?: string;
}

export interface OrderOffer {
  /** Id */
  id?: number;
  user_account?: UserAccount;
  /** Order id */
  order_id?: string;
  /**
   * Цена офера
   * @maxLength 300
   */
  offer_price?: string;
  /**
   * Время выполнения офера
   * @maxLength 300
   */
  offer_execution_time?: string;
  /**
   * Описание офера
   * @maxLength 300
   */
  offer_description?: string;
}

export interface AllOrdersClient {
  /** Id */
  id?: number;
  /**
   * Название заказа
   * @minLength 1
   * @maxLength 150
   */
  name?: string | null;
  /**
   * Дата создания заказа
   * @format date-time
   */
  order_time?: string;
  /** Статус */
  state?: "draft" | "offer" | "selected" | "completed";
  /** Contractor */
  contractor?: string;
  /** Files */
  files?: string;
}

export interface OrderFull {
  /**
   * Название заказа
   * @minLength 1
   * @maxLength 150
   */
  name?: string | null;
  /** Questionnaire type id */
  questionnaire_type_id?: number;
  /** Answers */
  answers?: string;
}

export interface QuestionnaireResponse {
  /** Id */
  id?: number;
  /** Question id */
  question_id: number;
  /**
   * Ответ по заказу
   * @maxLength 500
   */
  response?: string | null;
}

export interface File {
  /** ID */
  id?: number;
  /**
   * Имя файла
   * @minLength 1
   * @maxLength 250
   */
  original_name: string;
  /** File size */
  file_size: number;
  /** Preview url */
  preview_url?: string;
}

export interface OrderModel {
  /** Id */
  id?: number;
  /** User account */
  user_account?: number | null;
  /**
   * Описание заказа
   * @maxLength 300
   */
  order_description?: string;
  /**
   * Дата создания заказа
   * @format date-time
   */
  order_time?: string;
  /** Статус */
  state?: "draft" | "offer" | "selected" | "completed";
}

export interface Option {
  /** Id */
  id?: number;
  /**
   * Вопрос
   * @minLength 1
   * @maxLength 200
   */
  text: string;
  /** Тип опции */
  option_type: "answer" | "sub_questions";
  /** Questions */
  questions?: string;
}

export interface OuterQuestion {
  /** Id */
  id?: number;
  /**
   * Вопрос
   * @minLength 1
   * @maxLength 200
   */
  text: string;
  /** Тип ответа */
  answer_type: "text_field" | "choice_field" | "answer_not_required";
  /** File required */
  file_required?: boolean;
  /** Answer required */
  answer_required?: boolean;
  options?: Option[];
}

export interface QuestionnaireChapter {
  /** Id */
  id?: number;
  /**
   * Раздел опросника
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  questions?: OuterQuestion[];
}

export interface QuestionnaireType {
  /** Id */
  id?: number;
  /**
   * Тип анкеты - короткая, длинная
   * @minLength 1
   * @maxLength 100
   */
  type?: string | null;
  /**
   * Описание анкеты
   * @minLength 1
   * @maxLength 500
   */
  description?: string | null;
  chapters?: QuestionnaireChapter[];
}

export interface GalleryImages {
  /** Id */
  id?: number;
  /**
   * Slider number
   * @minLength 1
   */
  slider_number: string;
  /**
   * Название для картинки
   * @maxLength 120
   */
  name?: string | null;
  /** Image url */
  image_url?: string;
  /**
   * Цена за которую был выполнен заказ
   * @maxLength 10
   */
  price?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position: string;
}
