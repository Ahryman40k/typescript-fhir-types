
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
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        

        /**
         * Optional Extension Element - found in all resources. 
         */
        export class Extension  {

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
                 * Source of the definition for the extension code - a logical name or a URL.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueBase64Binary? : String;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueBoolean? : Boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueCanonical? : String;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueCode? : String;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDate? : String;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDateTime? : String;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDecimal? : Number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueId? : String;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueInstant? : String;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueInteger? : Number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueMarkdown? : String;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueOid? : String;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValuePositiveInt? : Number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueString? : String;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueTime? : String;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueUnsignedInt? : Number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueUri? : String;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueUrl? : String;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueUuid? : String;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueAddress? : Address;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueAge? : Age;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueAnnotation? : Annotation;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueAttachment? : Attachment;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueCodeableConcept? : CodeableConcept;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueCoding? : Coding;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueContactPoint? : ContactPoint;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueCount? : Count;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDistance? : Distance;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDuration? : Duration;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueHumanName? : HumanName;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueIdentifier? : Identifier;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueMoney? : Money;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValuePeriod? : Period;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueQuantity? : Quantity;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueRange? : Range;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueRatio? : Ratio;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueReference? : Reference;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueSampledData? : SampledData;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueSignature? : Signature;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueTiming? : Timing;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDataRequirement? : DataRequirement;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueContactDetail? : ContactDetail;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueContributor? : Contributor;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueExpression? : Expression;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueUsageContext? : UsageContext;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                ValueDosage? : Dosage;
                
        }
        