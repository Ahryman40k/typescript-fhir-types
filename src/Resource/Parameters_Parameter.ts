
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
import { ResourceList } from '../Union/ResourceList';
import { SampledData } from '../Resource/SampledData';
import { Signature } from '../Resource/Signature';
import { Timing } from '../Resource/Timing';
import { TriggerDefinition } from '../Resource/TriggerDefinition';
import { UsageContext } from '../Resource/UsageContext';

        

        /**
         * This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it. 
         */
        export class Parameters_Parameter  {

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
                 * The name of the parameter (reference to the operation definition).
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueBase64Binary? : String;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueCanonical? : String;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueCode? : String;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDecimal? : Number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueId? : String;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueInstant? : String;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueMarkdown? : String;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueOid? : String;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValuePositiveInt? : Number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueUnsignedInt? : Number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueUri? : String;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueUrl? : String;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueUuid? : String;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueAddress? : Address;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueAge? : Age;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueAnnotation? : Annotation;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueCodeableConcept? : CodeableConcept;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueCoding? : Coding;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueContactPoint? : ContactPoint;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueCount? : Count;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDistance? : Distance;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDuration? : Duration;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueHumanName? : HumanName;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueIdentifier? : Identifier;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueMoney? : Money;
                

                /**
                 * If the parameter is a data type.
                 */
                ValuePeriod? : Period;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueRange? : Range;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueRatio? : Ratio;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueReference? : Reference;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueSampledData? : SampledData;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueSignature? : Signature;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueTiming? : Timing;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDataRequirement? : DataRequirement;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueContactDetail? : ContactDetail;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueContributor? : Contributor;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueExpression? : Expression;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueUsageContext? : UsageContext;
                

                /**
                 * If the parameter is a data type.
                 */
                ValueDosage? : Dosage;
                

                /**
                 * If the parameter is a whole resource.
                 */
                Resource? : ResourceList;
                

                /**
                 * A named part of a multi-part parameter.
                 */
                Part? : Array<Parameters_Parameter>;
                
        }
        