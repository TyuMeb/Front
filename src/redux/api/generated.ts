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

export interface SendEmailReset {
    /**
     * Email
     * @format email
     * @minLength 1
     */
    email: string;
}

export interface UsernameResetConfirm {
    /**
     * Email
     * @format email
     * @minLength 5
     * @maxLength 50
     */
    new_email: string;
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
    name?: "bedside_table" | "kitchen" | "table" | null;
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

export interface Message {
    /** ID */
    id?: number;
    /** Отправитель */
    from_user: number;
    /**
     * Текст сообщения
     * @minLength 1
     */
    text_content: string;
    /**
     * Время отправки
     * @format date-time
     */
    timestamp?: string;
}

export interface Chat {
    /** ID */
    id?: number;
    messages?: Message[];
    /** @uniqueItems true */
    participants: number[];
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

export interface ContactData {
    /** Id */
    id?: number;
    /**
     * Имя компании
     * @maxLength 100
     */
    name?: string | null;
    /**
     * Почта
     * @maxLength 60
     */
    email?: string | null;
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

export interface OrderFull {
    /**
     * Название заказа
     * @minLength 1
     * @maxLength 150
     */
    name?: string | null;
    /** Questionnaire type id */
    questionnaire_type_id?: number;
    answers: QuestionnaireResponse[];
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
    option_type: "sub_questions" | "answer";
    /** Questions */
    questions?: string;
}

export interface Question {
    /** Id */
    id?: number;
    /**
     * Вопрос
     * @minLength 1
     * @maxLength 200
     */
    text: string;
    /** Тип ответа */
    answer_type: "answer_not_required" | "choice_field" | "text_field";
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
    questions?: Question[];
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
    /** Место на макете - слева направо */
    position?: "1" | "2" | "3" | "4";
}
