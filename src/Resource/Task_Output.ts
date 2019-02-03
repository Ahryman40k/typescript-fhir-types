
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
         * A task to be performed. 
         */
        export class Task_Output  {

            constructor() {
                this.Type = new CodeableConcept();
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
                 * The name of the Output parameter.
                 */
                Type : CodeableConcept;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueBase64Binary? : String;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueCanonical? : String;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueCode? : String;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDecimal? : Number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueId? : String;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueInstant? : String;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueMarkdown? : String;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueOid? : String;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValuePositiveInt? : Number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueUnsignedInt? : Number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueUri? : String;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueUrl? : String;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueUuid? : String;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueAddress? : Address;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueAge? : Age;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueAnnotation? : Annotation;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueCodeableConcept? : CodeableConcept;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueCoding? : Coding;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueContactPoint? : ContactPoint;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueCount? : Count;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDistance? : Distance;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDuration? : Duration;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueHumanName? : HumanName;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueIdentifier? : Identifier;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueMoney? : Money;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValuePeriod? : Period;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueRange? : Range;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueRatio? : Ratio;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueReference? : Reference;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueSampledData? : SampledData;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueSignature? : Signature;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueTiming? : Timing;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDataRequirement? : DataRequirement;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueContactDetail? : ContactDetail;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueContributor? : Contributor;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueExpression? : Expression;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueUsageContext? : UsageContext;
                

                /**
                 * The value of the Output parameter as a basic type.
                 */
                ValueDosage? : Dosage;
                
        }
        