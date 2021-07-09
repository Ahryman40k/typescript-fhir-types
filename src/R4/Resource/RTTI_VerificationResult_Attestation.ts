import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Signature, ISignature} from './RTTI_Signature';

export interface IVerificationResult_Attestation {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The individual or organization attesting to information.
   */
  who?: IReference;

  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  onBehalfOf?: IReference;

  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  communicationMethod?: ICodeableConcept;

  /**
   * The date the information was attested to.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * A digital identity certificate associated with the attestation source.
   */
  sourceIdentityCertificate?: string;

  /**
   * Extensions for sourceIdentityCertificate
   */
  _sourceIdentityCertificate?: IElement;

  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  proxyIdentityCertificate?: string;

  /**
   * Extensions for proxyIdentityCertificate
   */
  _proxyIdentityCertificate?: IElement;

  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  proxySignature?: ISignature;

  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  sourceSignature?: ISignature;
}

export const RTTI_VerificationResult_Attestation: t.Type<IVerificationResult_Attestation> =
  t.recursion('IVerificationResult_Attestation', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      who: RTTI_Reference,
      onBehalfOf: RTTI_Reference,
      communicationMethod: RTTI_CodeableConcept,
      date: RTTI_date,
      _date: RTTI_Element,
      sourceIdentityCertificate: t.string,
      _sourceIdentityCertificate: RTTI_Element,
      proxyIdentityCertificate: t.string,
      _proxyIdentityCertificate: RTTI_Element,
      proxySignature: RTTI_Signature,
      sourceSignature: RTTI_Signature,
    }),
  );
