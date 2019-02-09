
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * Describes validation requirements, source(s), status and dates for one or more elements. 
         */
        export class VerificationResult_Attestation  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The individual attesting to information.
                 */
                source? : Reference;
                

                /**
                 * The organization attesting to information.
                 */
                organization? : Reference;
                

                /**
                 * Who is providing the attested information (owner; authorized representative; authorized intermediary; non-authorized source).
                 */
                method? : CodeableConcept;
                

                /**
                 * The date the information was attested to.
                 */
                date? : Date;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * A digital identity certificate associated with the attestation source.
                 */
                sourceIdentityCertificate? : string;
                

                /**
                 * Extensions for sourceIdentityCertificate
                 */
                _sourceIdentityCertificate? : Element;
                

                /**
                 * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
                 */
                proxyIdentityCertificate? : string;
                

                /**
                 * Extensions for proxyIdentityCertificate
                 */
                _proxyIdentityCertificate? : Element;
                

                /**
                 * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
                 */
                signedProxyRightString? : string;
                

                /**
                 * Extensions for signedProxyRightString
                 */
                _signedProxyRightString? : Element;
                

                /**
                 * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
                 */
                signedProxyRightUri? : string;
                

                /**
                 * Extensions for signedProxyRightUri
                 */
                _signedProxyRightUri? : Element;
                

                /**
                 * Signed assertion by the attestation source that they have attested to the information.
                 */
                signedSourceAttestationString? : string;
                

                /**
                 * Extensions for signedSourceAttestationString
                 */
                _signedSourceAttestationString? : Element;
                

                /**
                 * Signed assertion by the attestation source that they have attested to the information.
                 */
                signedSourceAttestationUri? : string;
                

                /**
                 * Extensions for signedSourceAttestationUri
                 */
                _signedSourceAttestationUri? : Element;
                
        }
        