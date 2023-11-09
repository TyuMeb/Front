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

export interface TokenObtain {
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
     * Password
     * @minLength 1
     * @maxLength 128
     */
    password: string;
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

export interface CooperationOffer {
    /** Id */
    id?: number;
    /**
     * Запрос от пользователя
     * @maxLength 250
     */
    text?: string | null;
    /**
     * Дата создания обращения
     * @format date-time
     */
    created?: string;
    /** User account */
    user_account?: number | null;
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
    order_time: string;
    /** Статус */
    state: "created" | "offer" | "auction" | "auction_expired_no_offers" | "auction_expired" | "selected" | "completed";
    /** Contractor */
    contractor?: string;
    /** Files */
    files?: string;
}

export interface AnswerImage {
    /** Response */
    response: number;
    /**
     * Изображение
     * @format uri
     */
    image?: string;
}

export interface CategoryModelSeializer {
    /** Id */
    id?: number;
    /** @uniqueItems true */
    card: number[];
    /**
     * Тип мебели - кровать, ящик...
     * @minLength 1
     * @maxLength 20
     */
    name?: string | null;
}

export interface QuestionModel {
    /** Id */
    id?: number;
    /** Options */
    options?: string;
    /**
     * Вопрос по заказу
     * @maxLength 120
     */
    question?: string | null;
    /**
     * Номер вопроса по порядку
     * @min -2147483648
     * @max 2147483647
     */
    position?: number | null;
    /** Изображение? */
    is_image?: boolean;
}

export interface AnswerCreate {
    /** Id */
    id?: number;
    /**
     * Ответ по заказу
     * @maxLength 120
     */
    response?: string | null;
    /**
     * Номер ответа по порядку
     * @maxLength 10
     */
    position?: string | null;
    /** Question */
    question: number;
}