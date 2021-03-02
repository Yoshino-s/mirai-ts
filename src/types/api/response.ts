/**
 * API 响应格式
 * @packageDocumentation
 */

import * as MessageType from "../message-type";
import * as EventType from "../event-type";
import { Friend, Group, Member } from "../contact";
import {
  BotInvitedJoinGroupRequestOperationType,
  MemberJoinRequestOperationType,
  NewFriendRequestOperationType,
} from "../../mirai-api-http/resp";

export interface FetchMessage {
  code: number;
  data: (MessageType.ChatMessage | EventType.Event)[];
}

/**
 * 基础响应格式
 */
export interface BaseResponse {
  code: number;
  msg: string;
}

export interface SendMessage extends BaseResponse {
  /**
   * 一个Int类型属性，标识本条消息，用于撤回和引用回复
   */
  messageId: number;
}

export type MessageFromId = BaseResponse;

export interface Auth extends BaseResponse {
  /**
   * 状态码
   * 0: 正常
   * 1: 错误的 MIRAI API HTTP auth key
   */
  code: 0 | 1;
  /**
   * 你的 session key
   */
  session: string;
}

export interface About extends BaseResponse {
  data: {
    version: string;
  };
}

export interface UploadImage {
  imageId: string;
  url: string;
  path: string;
}

export interface UploadVoice {
  voiceId: string;
  url: string;
  path: string;
}

export type FriendList = Friend[];
export type GroupList = Group[];
export type MemberList = Member[];

// resp
export interface BaseRequestEvent {
  /**
   * session key
   */
  sessionKey: string;
  /**
   * 事件标识
   */
  eventId: number;
  /**
   * 发起者 QQ
   */
  fromId: number;
  /**
   * 来源群号
   */
  groupId: number;
  /**
   * 响应的操作类型
   */
  operate: number;
  /**
   * 回复的信息
   */
  message: string;
}

export interface NewFriendRequestEvent extends BaseRequestEvent {
  operate: NewFriendRequestOperationType;
}

export interface MemberJoinRequestEvent extends BaseRequestEvent {
  operate: MemberJoinRequestOperationType;
}

export interface BotInvitedJoinGroupRequestEvent extends BaseRequestEvent {
  operate: BotInvitedJoinGroupRequestOperationType;
}
