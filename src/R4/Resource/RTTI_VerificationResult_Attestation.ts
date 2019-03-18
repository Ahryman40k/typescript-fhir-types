
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IVerificationResult_Attestation {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The individual attesting to information.
                     */
                    source? : IReference;
                    

                    /**
                     * The organization attesting to information.
                     */
                    organization? : IReference;
                    

                    /**
                     * Who is providing the attested information (owner; authorized representative; authorized intermediary; non-authorized source).
                     */
                    method? : ICodeableConcept;
                    

                    /**
                     * The date the information was attested to.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * A digital identity certificate associated with the attestation source.
                     */
                    sourceIdentityCertificate? : string;
                    

                    /**
                     * Extensions for sourceIdentityCertificate
                     */
                    _sourceIdentityCertificate? : IElement;
                    

                    /**
                     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
                     */
                    proxyIdentityCertificate? : string;
                    

                    /**
                     * Extensions for proxyIdentityCertificate
                     */
                    _proxyIdentityCertificate? : IElement;
                    

                    /**
                     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
                     */
                    signedProxyRightString? : string;
                    

                    /**
                     * Extensions for signedProxyRightString
                     */
                    _signedProxyRightString? : IElement;
                    

                    /**
                     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
                     */
                    signedProxyRightUri? : string;
                    

                    /**
                     * Extensions for signedProxyRightUri
                     */
                    _signedProxyRightUri? : IElement;
                    

                    /**
                     * Signed assertion by the attestation source that they have attested to the information.
                     */
                    signedSourceAttestationString? : string;
                    

                    /**
                     * Extensions for signedSourceAttestationString
                     */
                    _signedSourceAttestationString? : IElement;
                    

                    /**
                     * Signed assertion by the attestation source that they have attested to the information.
                     */
                    signedSourceAttestationUri? : string;
                    

                    /**
                     * Extensions for signedSourceAttestationUri
                     */
                    _signedSourceAttestationUri? : IElement;
                    
            }
        


        export const RTTI_VerificationResult_Attestation: t.Type<IVerificationResult_Attestation> = t.recursion( 'IVerificationResult_Attestation', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
source: RTTI_Reference,
organization: RTTI_Reference,
method: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element,
sourceIdentityCertificate: t.string,
_sourceIdentityCertificate: RTTI_Element,
proxyIdentityCertificate: t.string,
_proxyIdentityCertificate: RTTI_Element,
signedProxyRightString: t.string,
_signedProxyRightString: RTTI_Element,
signedProxyRightUri: t.string,
_signedProxyRightUri: RTTI_Element,
signedSourceAttestationString: t.string,
_signedSourceAttestationString: RTTI_Element,
signedSourceAttestationUri: t.string,
_signedSourceAttestationUri: RTTI_Element
        })
        
        );
        

        