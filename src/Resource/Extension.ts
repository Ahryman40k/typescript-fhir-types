
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
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * Source of the definition for the extension code - a logical name or a URL.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueBase64Binary? : string;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueCanonical? : string;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueCode? : string;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDate? : string;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueId? : string;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueInstant? : string;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueMarkdown? : string;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueOid? : string;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valuePositiveInt? : number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueUnsignedInt? : number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueUrl? : string;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueUuid? : string;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueAddress? : Address;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueAge? : Age;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueAnnotation? : Annotation;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueAttachment? : Attachment;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueCodeableConcept? : CodeableConcept;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueCoding? : Coding;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueContactPoint? : ContactPoint;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueCount? : Count;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDistance? : Distance;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDuration? : Duration;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueHumanName? : HumanName;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueIdentifier? : Identifier;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueMoney? : Money;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valuePeriod? : Period;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueQuantity? : Quantity;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueRange? : Range;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueRatio? : Ratio;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueReference? : Reference;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueSampledData? : SampledData;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueSignature? : Signature;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueTiming? : Timing;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueParameterDefinition? : ParameterDefinition;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDataRequirement? : DataRequirement;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueContactDetail? : ContactDetail;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueContributor? : Contributor;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueExpression? : Expression;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueUsageContext? : UsageContext;
                

                /**
                 * Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
                 */
                valueDosage? : Dosage;
                
        }
        