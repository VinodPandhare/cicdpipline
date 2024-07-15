import { Construct } from 'constructs';
import { IConfigurationSet } from './configuration-set';
import { Grant, IGrantable } from '../../aws-iam';
import { IPublicHostedZone } from '../../aws-route53';
import * as route53 from '../../aws-route53';
import { IResource, Resource, SecretValue } from '../../core';
/**
 * An email identity
 */
export interface IEmailIdentity extends IResource {
    /**
     * The name of the email identity
     *
     * @attribute
     */
    readonly emailIdentityName: string;
    /**
     * The ARN of the email identity
     *
     * @attribute
     */
    readonly emailIdentityArn: string;
    /**
     * Adds an IAM policy statement associated with this email identity to an IAM principal's policy.
     *
     * @param grantee the principal (no-op if undefined)
     * @param actions the set of actions to allow
     */
    grant(grantee: IGrantable, ...actions: string[]): Grant;
    /**
     * Permits an IAM principal the send email action.
     *
     * Actions: SendEmail.
     *
     * @param grantee the principal to grant access to
     */
    grantSendEmail(grantee: IGrantable): Grant;
}
/**
 * Properties for an email identity
 */
export interface EmailIdentityProps {
    /**
     * The email address or domain to verify.
     */
    readonly identity: Identity;
    /**
     * The configuration set to associate with the email identity
     *
     * @default - do not use a specific configuration set
     */
    readonly configurationSet?: IConfigurationSet;
    /**
     * Whether the messages that are sent from the identity are signed using DKIM
     *
     * @default true
     */
    readonly dkimSigning?: boolean;
    /**
     * The type of DKIM identity to use
     *
     * @default - Easy DKIM with a key length of 2048-bit
     */
    readonly dkimIdentity?: DkimIdentity;
    /**
     * Whether to receive email notifications when bounce or complaint events occur.
     * These notifications are sent to the address that you specified in the `Return-Path`
     * header of the original email.
     *
     * You're required to have a method of tracking bounces and complaints. If you haven't set
     * up another mechanism for receiving bounce or complaint notifications (for example, by
     * setting up an event destination), you receive an email notification when these events
     * occur (even if this setting is disabled).
     *
     * @default true
     */
    readonly feedbackForwarding?: boolean;
    /**
     * The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain
     * must meet the following criteria:
     *   - It has to be a subdomain of the verified identity
     *   - It can't be used to receive email
     *   - It can't be used in a "From" address if the MAIL FROM domain is a destination for feedback
     *     forwarding emails
     *
     * @default - use amazonses.com
     */
    readonly mailFromDomain?: string;
    /**
     * The action to take if the required MX record for the MAIL FROM domain isn't
     * found when you send an email
     *
     * @default MailFromBehaviorOnMxFailure.USE_DEFAULT_VALUE
     */
    readonly mailFromBehaviorOnMxFailure?: MailFromBehaviorOnMxFailure;
}
/**
 * Identity
 */
export declare abstract class Identity {
    /**
     * Verify an email address
     *
     * To complete the verification process look for an email from
     * no-reply-aws@amazon.com, open it and click the link.
     */
    static email(email: string): Identity;
    /**
     * Verify a domain name
     *
     * DKIM records will have to be added manually to complete the verification
     * process
     */
    static domain(domain: string): Identity;
    /**
     * Verify a public hosted zone
     *
     * DKIM and MAIL FROM records will be added automatically to the hosted
     * zone
     */
    static publicHostedZone(hostedZone: IPublicHostedZone): Identity;
    /**
     * The value of the identity
     */
    abstract readonly value: string;
    /**
     * The hosted zone associated with this identity
     *
     * @default - no hosted zone is associated and no records are created
     */
    abstract readonly hostedZone?: IPublicHostedZone;
}
/**
 * The action to take if the required MX record for the MAIL FROM domain isn't
 * found
 */
export declare enum MailFromBehaviorOnMxFailure {
    /**
     * The mail is sent using amazonses.com as the MAIL FROM domain
     */
    USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE",
    /**
     * The Amazon SES API v2 returns a `MailFromDomainNotVerified` error and doesn't
     * attempt to deliver the email
     */
    REJECT_MESSAGE = "REJECT_MESSAGE"
}
/**
 * Configuration for DKIM identity
 */
export interface DkimIdentityConfig {
    /**
     * A private key that's used to generate a DKIM signature
     *
     * @default - use Easy DKIM
     */
    readonly domainSigningPrivateKey?: string;
    /**
      * A string that's used to identify a public key in the DNS configuration for
      * a domain
      *
      * @default - use Easy DKIM
      */
    readonly domainSigningSelector?: string;
    /**
      * The key length of the future DKIM key pair to be generated. This can be changed
      * at most once per day.
      *
      * @default EasyDkimSigningKeyLength.RSA_2048_BIT
      */
    readonly nextSigningKeyLength?: EasyDkimSigningKeyLength;
}
/**
 * The identity to use for DKIM
 */
export declare abstract class DkimIdentity {
    /**
     * Easy DKIM
     *
     * @param signingKeyLength The length of the signing key. This can be changed at
     *   most once per day.
     *
     * @see https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html
     */
    static easyDkim(signingKeyLength?: EasyDkimSigningKeyLength): DkimIdentity;
    /**
     * Bring Your Own DKIM
     *
     * @param options Options for BYO DKIM
     *
     * @see https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-bring-your-own.html
     */
    static byoDkim(options: ByoDkimOptions): DkimIdentity;
    /**
     * Binds this DKIM identity to the email identity
     */
    abstract bind(emailIdentity: EmailIdentity, hostedZone?: route53.IPublicHostedZone): DkimIdentityConfig | undefined;
}
/**
 * Options for BYO DKIM
 */
export interface ByoDkimOptions {
    /**
     * The private key that's used to generate a DKIM signature
     */
    readonly privateKey: SecretValue;
    /**
     * A string that's used to identify a public key in the DNS configuration for
     * a domain
     */
    readonly selector: string;
    /**
     * The public key. If specified, a TXT record with the public key is created.
     *
     * @default - the validation TXT record with the public key is not created
     */
    readonly publicKey?: string;
}
/**
 * The signing key length for Easy DKIM
 */
export declare enum EasyDkimSigningKeyLength {
    /**
     * RSA 1024-bit
     */
    RSA_1024_BIT = "RSA_1024_BIT",
    /**
     * RSA 2048-bit
     */
    RSA_2048_BIT = "RSA_2048_BIT"
}
declare abstract class EmailIdentityBase extends Resource implements IEmailIdentity {
    /**
     * The name of the email identity
     *
     * @attribute
     */
    abstract readonly emailIdentityName: string;
    /**
     * The ARN of the email identity
     *
     * @attribute
     */
    abstract readonly emailIdentityArn: string;
    /**
     * Adds an IAM policy statement associated with this email identity to an IAM principal's policy.
     *
     * @param grantee the principal (no-op if undefined)
     * @param actions the set of actions to allow
     */
    grant(grantee: IGrantable, ...actions: string[]): Grant;
    /**
     * Permits an IAM principal the send email action.
     *
     * Actions: SendEmail, SendRawEmail.
     *
     * @param grantee the principal to grant access to
     */
    grantSendEmail(grantee: IGrantable): Grant;
}
/**
 * An email identity
 */
export declare class EmailIdentity extends EmailIdentityBase {
    /**
     * Use an existing email identity
     */
    static fromEmailIdentityName(scope: Construct, id: string, emailIdentityName: string): IEmailIdentity;
    readonly emailIdentityName: string;
    readonly emailIdentityArn: string;
    /**
     * The host name for the first token that you have to add to the
     * DNS configurationfor your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenName1: string;
    /**
     * The host name for the second token that you have to add to the
     * DNS configuration for your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenName2: string;
    /**
     * The host name for the third token that you have to add to the
     * DNS configuration for your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenName3: string;
    /**
     * The record value for the first token that you have to add to the
     * DNS configuration for your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenValue1: string;
    /**
     * The record value for the second token that you have to add to the
     * DNS configuration for your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenValue2: string;
    /**
     * The record value for the third token that you have to add to the
     * DNS configuration for your domain
     *
     * @attribute
     */
    readonly dkimDnsTokenValue3: string;
    /**
     * DKIM records for this identity
     */
    readonly dkimRecords: DkimRecord[];
    constructor(scope: Construct, id: string, props: EmailIdentityProps);
}
/**
 * A DKIM record
 */
export interface DkimRecord {
    /**
     * The name of the record
     */
    readonly name: string;
    /**
     * The value of the record
     */
    readonly value: string;
}
export {};