import { Construct } from 'constructs';
import { IHostedZone } from './hosted-zone-ref';
import * as kms from '../../aws-kms';
import { Resource, IResource } from '../../core';
/**
 * Properties for constructing a Key Signing Key.
 */
export interface KeySigningKeyProps {
    /**
     * The hosted zone that this key will be used to sign.
     */
    readonly hostedZone: IHostedZone;
    /**
     * The customer-managed KMS key that that will be used to sign the records.
     *
     * The KMS Key must be unique for each KSK within a hosted zone. Additionally, the
     * KMS key must be an asymetric customer-managed key using the ECC_NIST_P256 algorithm.
     *
     * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-cmk-requirements.html
     */
    readonly kmsKey: kms.IKey;
    /**
     * The name for the key signing key.
     *
     * This name must be unique within a hosted zone.
     *
     * @default an autogenerated name
     */
    readonly keySigningKeyName?: string;
    /**
     * The status of the key signing key.
     *
     * @default ACTIVE
     */
    readonly status?: KeySigningKeyStatus;
}
/**
 * The status for a Key Signing Key.
 */
export declare enum KeySigningKeyStatus {
    /** The KSK is being used for signing. */
    ACTIVE = "ACTIVE",
    /** The KSK is not being used for signing. */
    INACTIVE = "INACTIVE"
}
/**
 * A Key Signing Key for a Route 53 Hosted Zone.
 */
export interface IKeySigningKey extends IResource {
    /**
     * The hosted zone that the key signing key signs.
     *
     * @attribute
     */
    readonly hostedZone: IHostedZone;
    /**
     * The name of the key signing key.
     *
     * @attribute
     */
    readonly keySigningKeyName: string;
    /**
     * The ID of the key signing key, derived from the hosted zone ID and its name.
     *
     * @attribute
     */
    readonly keySigningKeyId: string;
}
/**
 * The attributes of a key signing key.
 */
export interface KeySigningKeyAttributes {
    /**
     * The hosted zone that the key signing key signs.
     *
     * @attribute
     */
    readonly hostedZone: IHostedZone;
    /**
     * The name of the key signing key.
     *
     * @attribute
     */
    readonly keySigningKeyName: string;
}
/**
 * A Key Signing Key for a Route 53 Hosted Zone.
 *
 * @resource AWS::Route53::KeySigningKey
 */
export declare class KeySigningKey extends Resource implements IKeySigningKey {
    /**
     * Imports a key signing key from its attributes.
     */
    static fromKeySigningKeyAttributes(scope: Construct, id: string, attrs: KeySigningKeyAttributes): IKeySigningKey;
    readonly hostedZone: IHostedZone;
    readonly keySigningKeyName: string;
    readonly keySigningKeyId: string;
    constructor(scope: Construct, id: string, props: KeySigningKeyProps);
    private grantKeyPermissionsForZone;
}