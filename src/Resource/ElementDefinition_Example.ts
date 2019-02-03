
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
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Describes the purpose of this example amoung the set of examples.
                 */
                Label? : String;
                

                /**
                 * Extensions for label
                 */
                _label? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueBase64Binary? : String;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueCanonical? : String;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueCode? : String;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDecimal? : Number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueId? : String;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueInstant? : String;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueMarkdown? : String;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueOid? : String;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValuePositiveInt? : Number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueUnsignedInt? : Number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueUri? : String;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueUrl? : String;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueUuid? : String;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueAddress? : Address;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueAge? : Age;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueAnnotation? : Annotation;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueCodeableConcept? : CodeableConcept;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueCoding? : Coding;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueContactPoint? : ContactPoint;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueCount? : Count;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDistance? : Distance;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDuration? : Duration;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueHumanName? : HumanName;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueIdentifier? : Identifier;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueMoney? : Money;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValuePeriod? : Period;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueRange? : Range;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueRatio? : Ratio;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueReference? : Reference;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueSampledData? : SampledData;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueSignature? : Signature;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueTiming? : Timing;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDataRequirement? : DataRequirement;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueContactDetail? : ContactDetail;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueContributor? : Contributor;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueExpression? : Expression;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueUsageContext? : UsageContext;
                

                /**
                 * The actual value for the element, which must be one of the types allowed for this element.
                 */
                ValueDosage? : Dosage;
                
        }
        