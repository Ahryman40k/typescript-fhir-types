
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
                 * The name of the parameter (reference to the operation definition).
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueBase64Binary? : string;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueCanonical? : string;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueCode? : string;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDate? : string;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueId? : string;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueInstant? : string;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueMarkdown? : string;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueOid? : string;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valuePositiveInt? : number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueUnsignedInt? : number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueUrl? : string;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueUuid? : string;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * If the parameter is a data type.
                 */
                valueAddress? : Address;
                

                /**
                 * If the parameter is a data type.
                 */
                valueAge? : Age;
                

                /**
                 * If the parameter is a data type.
                 */
                valueAnnotation? : Annotation;
                

                /**
                 * If the parameter is a data type.
                 */
                valueAttachment? : Attachment;
                

                /**
                 * If the parameter is a data type.
                 */
                valueCodeableConcept? : CodeableConcept;
                

                /**
                 * If the parameter is a data type.
                 */
                valueCoding? : Coding;
                

                /**
                 * If the parameter is a data type.
                 */
                valueContactPoint? : ContactPoint;
                

                /**
                 * If the parameter is a data type.
                 */
                valueCount? : Count;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDistance? : Distance;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDuration? : Duration;
                

                /**
                 * If the parameter is a data type.
                 */
                valueHumanName? : HumanName;
                

                /**
                 * If the parameter is a data type.
                 */
                valueIdentifier? : Identifier;
                

                /**
                 * If the parameter is a data type.
                 */
                valueMoney? : Money;
                

                /**
                 * If the parameter is a data type.
                 */
                valuePeriod? : Period;
                

                /**
                 * If the parameter is a data type.
                 */
                valueQuantity? : Quantity;
                

                /**
                 * If the parameter is a data type.
                 */
                valueRange? : Range;
                

                /**
                 * If the parameter is a data type.
                 */
                valueRatio? : Ratio;
                

                /**
                 * If the parameter is a data type.
                 */
                valueReference? : Reference;
                

                /**
                 * If the parameter is a data type.
                 */
                valueSampledData? : SampledData;
                

                /**
                 * If the parameter is a data type.
                 */
                valueSignature? : Signature;
                

                /**
                 * If the parameter is a data type.
                 */
                valueTiming? : Timing;
                

                /**
                 * If the parameter is a data type.
                 */
                valueParameterDefinition? : ParameterDefinition;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDataRequirement? : DataRequirement;
                

                /**
                 * If the parameter is a data type.
                 */
                valueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * If the parameter is a data type.
                 */
                valueContactDetail? : ContactDetail;
                

                /**
                 * If the parameter is a data type.
                 */
                valueContributor? : Contributor;
                

                /**
                 * If the parameter is a data type.
                 */
                valueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * If the parameter is a data type.
                 */
                valueExpression? : Expression;
                

                /**
                 * If the parameter is a data type.
                 */
                valueUsageContext? : UsageContext;
                

                /**
                 * If the parameter is a data type.
                 */
                valueDosage? : Dosage;
                

                /**
                 * If the parameter is a whole resource.
                 */
                resource? : ResourceList;
                

                /**
                 * A named part of a multi-part parameter.
                 */
                part? : Parameters_Parameter[];
                
        }
        