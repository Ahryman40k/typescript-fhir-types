
        import { Address } from '../Resource/Address';
import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Attachment } from '../Resource/Attachment';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { ContactDetail } from '../Resource/ContactDetail';
import { ContactPoint } from '../Resource/ContactPoint';
import { Contributor } from '../Resource/Contributor';
import { Count } from '../Resource/Count';
import { DataRequirement } from '../Resource/DataRequirement';
import { Distance } from '../Resource/Distance';
import { Dosage } from '../Resource/Dosage';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Expression } from '../Resource/Expression';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Identifier } from '../Resource/Identifier';
import { Money } from '../Resource/Money';
import { ParameterDefinition } from '../Resource/ParameterDefinition';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { SampledData } from '../Resource/SampledData';
import { Signature } from '../Resource/Signature';
import { Timing } from '../Resource/Timing';
import { TriggerDefinition } from '../Resource/TriggerDefinition';
import { UsageContext } from '../Resource/UsageContext';

        

        /**
         * Captures constraints on each element within the resource, profile, or extension. 
         */
        export class ElementDefinition_Example  {

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
                 * Describes the purpose of this example amoung the set of examples.
                 */
                label? : string;
                

                /**
                 * Extensions for label
                 */
                _label? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueBase64Binary? : string;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueCanonical? : string;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueCode? : string;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDate? : string;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueId? : string;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueInstant? : string;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueMarkdown? : string;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueOid? : string;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valuePositiveInt? : number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueUnsignedInt? : number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueUrl? : string;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueUuid? : string;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueAddress? : Address;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueAge? : Age;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueAnnotation? : Annotation;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueAttachment? : Attachment;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueCodeableConcept? : CodeableConcept;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueCoding? : Coding;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueContactPoint? : ContactPoint;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueCount? : Count;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDistance? : Distance;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDuration? : Duration;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueHumanName? : HumanName;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueIdentifier? : Identifier;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueMoney? : Money;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valuePeriod? : Period;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueQuantity? : Quantity;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueRange? : Range;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueRatio? : Ratio;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueReference? : Reference;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueSampledData? : SampledData;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueSignature? : Signature;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueTiming? : Timing;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueParameterDefinition? : ParameterDefinition;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDataRequirement? : DataRequirement;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueContactDetail? : ContactDetail;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueContributor? : Contributor;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueExpression? : Expression;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueUsageContext? : UsageContext;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                valueDosage? : Dosage;
                
        }
        