import { RTTI_Account, IAccount } from '../Resource/RTTI_Account';
import { RTTI_ActivityDefinition, IActivityDefinition } from '../Resource/RTTI_ActivityDefinition';
import { RTTI_AdverseEvent, IAdverseEvent } from '../Resource/RTTI_AdverseEvent';
import { RTTI_AllergyIntolerance, IAllergyIntolerance } from '../Resource/RTTI_AllergyIntolerance';
import { RTTI_Appointment, IAppointment } from '../Resource/RTTI_Appointment';
import { RTTI_AppointmentResponse, IAppointmentResponse } from '../Resource/RTTI_AppointmentResponse';
import { RTTI_AuditEvent, IAuditEvent } from '../Resource/RTTI_AuditEvent';
import { RTTI_Basic, IBasic } from '../Resource/RTTI_Basic';
import { RTTI_Binary, IBinary } from '../Resource/RTTI_Binary';
import { RTTI_BiologicallyDerivedProduct, IBiologicallyDerivedProduct } from '../Resource/RTTI_BiologicallyDerivedProduct';
import { RTTI_BodyStructure, IBodyStructure } from '../Resource/RTTI_BodyStructure';
import { RTTI_Bundle, IBundle } from '../Resource/RTTI_Bundle';
import { RTTI_CapabilityStatement, ICapabilityStatement } from '../Resource/RTTI_CapabilityStatement';
import { RTTI_CarePlan, ICarePlan } from '../Resource/RTTI_CarePlan';
import { RTTI_CareTeam, ICareTeam } from '../Resource/RTTI_CareTeam';
import { RTTI_ChargeItem, IChargeItem } from '../Resource/RTTI_ChargeItem';
import { RTTI_ChargeItemDefinition, IChargeItemDefinition } from '../Resource/RTTI_ChargeItemDefinition';
import { RTTI_Claim, IClaim } from '../Resource/RTTI_Claim';
import { RTTI_ClaimResponse, IClaimResponse } from '../Resource/RTTI_ClaimResponse';
import { RTTI_ClinicalImpression, IClinicalImpression } from '../Resource/RTTI_ClinicalImpression';
import { RTTI_CodeSystem, ICodeSystem } from '../Resource/RTTI_CodeSystem';
import { RTTI_Communication, ICommunication } from '../Resource/RTTI_Communication';
import { RTTI_CommunicationRequest, ICommunicationRequest } from '../Resource/RTTI_CommunicationRequest';
import { RTTI_CompartmentDefinition, ICompartmentDefinition } from '../Resource/RTTI_CompartmentDefinition';
import { RTTI_Composition, IComposition } from '../Resource/RTTI_Composition';
import { RTTI_ConceptMap, IConceptMap } from '../Resource/RTTI_ConceptMap';
import { RTTI_Condition, ICondition } from '../Resource/RTTI_Condition';
import { RTTI_Consent, IConsent } from '../Resource/RTTI_Consent';
import { RTTI_Contract, IContract } from '../Resource/RTTI_Contract';
import { RTTI_Coverage, ICoverage } from '../Resource/RTTI_Coverage';
import { RTTI_CoverageEligibilityRequest, ICoverageEligibilityRequest } from '../Resource/RTTI_CoverageEligibilityRequest';
import { RTTI_CoverageEligibilityResponse, ICoverageEligibilityResponse } from '../Resource/RTTI_CoverageEligibilityResponse';
import { RTTI_DetectedIssue, IDetectedIssue } from '../Resource/RTTI_DetectedIssue';
import { RTTI_Device, IDevice } from '../Resource/RTTI_Device';
import { RTTI_DeviceDefinition, IDeviceDefinition } from '../Resource/RTTI_DeviceDefinition';
import { RTTI_DeviceMetric, IDeviceMetric } from '../Resource/RTTI_DeviceMetric';
import { RTTI_DeviceRequest, IDeviceRequest } from '../Resource/RTTI_DeviceRequest';
import { RTTI_DeviceUseStatement, IDeviceUseStatement } from '../Resource/RTTI_DeviceUseStatement';
import { RTTI_DiagnosticReport, IDiagnosticReport } from '../Resource/RTTI_DiagnosticReport';
import { RTTI_DocumentManifest, IDocumentManifest } from '../Resource/RTTI_DocumentManifest';
import { RTTI_DocumentReference, IDocumentReference } from '../Resource/RTTI_DocumentReference';
import { RTTI_Encounter, IEncounter } from '../Resource/RTTI_Encounter';
import { RTTI_Endpoint, IEndpoint } from '../Resource/RTTI_Endpoint';
import { RTTI_EnrollmentRequest, IEnrollmentRequest } from '../Resource/RTTI_EnrollmentRequest';
import { RTTI_EnrollmentResponse, IEnrollmentResponse } from '../Resource/RTTI_EnrollmentResponse';
import { RTTI_EpisodeOfCare, IEpisodeOfCare } from '../Resource/RTTI_EpisodeOfCare';
import { RTTI_EventDefinition, IEventDefinition } from '../Resource/RTTI_EventDefinition';
import { RTTI_ExampleScenario, IExampleScenario } from '../Resource/RTTI_ExampleScenario';
import { RTTI_ExplanationOfBenefit, IExplanationOfBenefit } from '../Resource/RTTI_ExplanationOfBenefit';
import { RTTI_FamilyMemberHistory, IFamilyMemberHistory } from '../Resource/RTTI_FamilyMemberHistory';
import { RTTI_Flag, IFlag } from '../Resource/RTTI_Flag';
import { RTTI_Goal, IGoal } from '../Resource/RTTI_Goal';
import { RTTI_GraphDefinition, IGraphDefinition } from '../Resource/RTTI_GraphDefinition';
import { RTTI_Group, IGroup } from '../Resource/RTTI_Group';
import { RTTI_GuidanceResponse, IGuidanceResponse } from '../Resource/RTTI_GuidanceResponse';
import { RTTI_HealthcareService, IHealthcareService } from '../Resource/RTTI_HealthcareService';
import { RTTI_ImagingStudy, IImagingStudy } from '../Resource/RTTI_ImagingStudy';
import { RTTI_Immunization, IImmunization } from '../Resource/RTTI_Immunization';
import { RTTI_ImmunizationEvaluation, IImmunizationEvaluation } from '../Resource/RTTI_ImmunizationEvaluation';
import { RTTI_ImmunizationRecommendation, IImmunizationRecommendation } from '../Resource/RTTI_ImmunizationRecommendation';
import { RTTI_ImplementationGuide, IImplementationGuide } from '../Resource/RTTI_ImplementationGuide';
import { RTTI_InsurancePlan, IInsurancePlan } from '../Resource/RTTI_InsurancePlan';
import { RTTI_Invoice, IInvoice } from '../Resource/RTTI_Invoice';
import { RTTI_Library, ILibrary } from '../Resource/RTTI_Library';
import { RTTI_Linkage, ILinkage } from '../Resource/RTTI_Linkage';
import { RTTI_List, IList } from '../Resource/RTTI_List';
import { RTTI_Location, ILocation } from '../Resource/RTTI_Location';
import { RTTI_Measure, IMeasure } from '../Resource/RTTI_Measure';
import { RTTI_MeasureReport, IMeasureReport } from '../Resource/RTTI_MeasureReport';
import { RTTI_Media, IMedia } from '../Resource/RTTI_Media';
import { RTTI_Medication, IMedication } from '../Resource/RTTI_Medication';
import { RTTI_MedicationAdministration, IMedicationAdministration } from '../Resource/RTTI_MedicationAdministration';
import { RTTI_MedicationDispense, IMedicationDispense } from '../Resource/RTTI_MedicationDispense';
import { RTTI_MedicationKnowledge, IMedicationKnowledge } from '../Resource/RTTI_MedicationKnowledge';
import { RTTI_MedicationRequest, IMedicationRequest } from '../Resource/RTTI_MedicationRequest';
import { RTTI_MedicationStatement, IMedicationStatement } from '../Resource/RTTI_MedicationStatement';
import { RTTI_MedicinalProduct, IMedicinalProduct } from '../Resource/RTTI_MedicinalProduct';
import { RTTI_MedicinalProductAuthorization, IMedicinalProductAuthorization } from '../Resource/RTTI_MedicinalProductAuthorization';
import { RTTI_MedicinalProductContraindication, IMedicinalProductContraindication } from '../Resource/RTTI_MedicinalProductContraindication';
import { RTTI_MedicinalProductIndication, IMedicinalProductIndication } from '../Resource/RTTI_MedicinalProductIndication';
import { RTTI_MedicinalProductIngredient, IMedicinalProductIngredient } from '../Resource/RTTI_MedicinalProductIngredient';
import { RTTI_MedicinalProductInteraction, IMedicinalProductInteraction } from '../Resource/RTTI_MedicinalProductInteraction';
import { RTTI_MedicinalProductManufactured, IMedicinalProductManufactured } from '../Resource/RTTI_MedicinalProductManufactured';
import { RTTI_MedicinalProductPackaged, IMedicinalProductPackaged } from '../Resource/RTTI_MedicinalProductPackaged';
import { RTTI_MedicinalProductPharmaceutical, IMedicinalProductPharmaceutical } from '../Resource/RTTI_MedicinalProductPharmaceutical';
import { RTTI_MedicinalProductUndesirableEffect, IMedicinalProductUndesirableEffect } from '../Resource/RTTI_MedicinalProductUndesirableEffect';
import { RTTI_MessageDefinition, IMessageDefinition } from '../Resource/RTTI_MessageDefinition';
import { RTTI_MessageHeader, IMessageHeader } from '../Resource/RTTI_MessageHeader';
import { RTTI_NamingSystem, INamingSystem } from '../Resource/RTTI_NamingSystem';
import { RTTI_NutritionOrder, INutritionOrder } from '../Resource/RTTI_NutritionOrder';
import { RTTI_Observation, IObservation } from '../Resource/RTTI_Observation';
import { RTTI_ObservationDefinition, IObservationDefinition } from '../Resource/RTTI_ObservationDefinition';
import { RTTI_OperationDefinition, IOperationDefinition } from '../Resource/RTTI_OperationDefinition';
import { RTTI_OperationOutcome, IOperationOutcome } from '../Resource/RTTI_OperationOutcome';
import { RTTI_Organization, IOrganization } from '../Resource/RTTI_Organization';
import { RTTI_OrganizationAffiliation, IOrganizationAffiliation } from '../Resource/RTTI_OrganizationAffiliation';
import { RTTI_Parameters, IParameters } from '../Resource/RTTI_Parameters';
import { RTTI_Patient, IPatient } from '../Resource/RTTI_Patient';
import { RTTI_PaymentNotice, IPaymentNotice } from '../Resource/RTTI_PaymentNotice';
import { RTTI_PaymentReconciliation, IPaymentReconciliation } from '../Resource/RTTI_PaymentReconciliation';
import { RTTI_Person, IPerson } from '../Resource/RTTI_Person';
import { RTTI_PlanDefinition, IPlanDefinition } from '../Resource/RTTI_PlanDefinition';
import { RTTI_Practitioner, IPractitioner } from '../Resource/RTTI_Practitioner';
import { RTTI_PractitionerRole, IPractitionerRole } from '../Resource/RTTI_PractitionerRole';
import { RTTI_Procedure, IProcedure } from '../Resource/RTTI_Procedure';
import { RTTI_Provenance, IProvenance } from '../Resource/RTTI_Provenance';
import { RTTI_Questionnaire, IQuestionnaire } from '../Resource/RTTI_Questionnaire';
import { RTTI_QuestionnaireResponse, IQuestionnaireResponse } from '../Resource/RTTI_QuestionnaireResponse';
import { RTTI_RelatedPerson, IRelatedPerson } from '../Resource/RTTI_RelatedPerson';
import { RTTI_RequestGroup, IRequestGroup } from '../Resource/RTTI_RequestGroup';
import { RTTI_ResearchStudy, IResearchStudy } from '../Resource/RTTI_ResearchStudy';
import { RTTI_ResearchSubject, IResearchSubject } from '../Resource/RTTI_ResearchSubject';
import { RTTI_RiskAssessment, IRiskAssessment } from '../Resource/RTTI_RiskAssessment';
import { RTTI_Schedule, ISchedule } from '../Resource/RTTI_Schedule';
import { RTTI_SearchParameter, ISearchParameter } from '../Resource/RTTI_SearchParameter';
import { RTTI_ServiceRequest, IServiceRequest } from '../Resource/RTTI_ServiceRequest';
import { RTTI_Slot, ISlot } from '../Resource/RTTI_Slot';
import { RTTI_Specimen, ISpecimen } from '../Resource/RTTI_Specimen';
import { RTTI_SpecimenDefinition, ISpecimenDefinition } from '../Resource/RTTI_SpecimenDefinition';
import { RTTI_StructureDefinition, IStructureDefinition } from '../Resource/RTTI_StructureDefinition';
import { RTTI_StructureMap, IStructureMap } from '../Resource/RTTI_StructureMap';
import { RTTI_Subscription, ISubscription } from '../Resource/RTTI_Subscription';
import { RTTI_Substance, ISubstance } from '../Resource/RTTI_Substance';
import { RTTI_SubstancePolymer, ISubstancePolymer } from '../Resource/RTTI_SubstancePolymer';
import { RTTI_SubstanceReferenceInformation, ISubstanceReferenceInformation } from '../Resource/RTTI_SubstanceReferenceInformation';
import { RTTI_SubstanceSpecification, ISubstanceSpecification } from '../Resource/RTTI_SubstanceSpecification';
import { RTTI_SupplyDelivery, ISupplyDelivery } from '../Resource/RTTI_SupplyDelivery';
import { RTTI_SupplyRequest, ISupplyRequest } from '../Resource/RTTI_SupplyRequest';
import { RTTI_Task, ITask } from '../Resource/RTTI_Task';
import { RTTI_TerminologyCapabilities, ITerminologyCapabilities } from '../Resource/RTTI_TerminologyCapabilities';
import { RTTI_TestReport, ITestReport } from '../Resource/RTTI_TestReport';
import { RTTI_TestScript, ITestScript } from '../Resource/RTTI_TestScript';
import { RTTI_ValueSet, IValueSet } from '../Resource/RTTI_ValueSet';
import { RTTI_VerificationResult, IVerificationResult } from '../Resource/RTTI_VerificationResult';
import { RTTI_VisionPrescription, IVisionPrescription } from '../Resource/RTTI_VisionPrescription';


import * as t from 'io-ts';

export type IResourceList =
    IAccount |
    IActivityDefinition |
    IAdverseEvent |
    IAllergyIntolerance |
    IAppointment |
    IAppointmentResponse |
    IAuditEvent |
    IBasic |
    IBinary |
    IBiologicallyDerivedProduct |
    IBodyStructure |
    IBundle |
    ICapabilityStatement |
    ICarePlan |
    ICareTeam |
    IChargeItem |
    IChargeItemDefinition |
    IClaim |
    IClaimResponse |
    IClinicalImpression |
    ICodeSystem |
    ICommunication |
    ICommunicationRequest |
    ICompartmentDefinition |
    IComposition |
    IConceptMap |
    ICondition |
    IConsent |
    IContract |
    ICoverage |
    ICoverageEligibilityRequest |
    ICoverageEligibilityResponse |
    IDetectedIssue |
    IDevice |
    IDeviceDefinition |
    IDeviceMetric |
    IDeviceRequest |
    IDeviceUseStatement |
    IDiagnosticReport |
    IDocumentManifest |
    IDocumentReference |
    IEncounter |
    IEndpoint |
    IEnrollmentRequest |
    IEnrollmentResponse |
    IEpisodeOfCare |
    IEventDefinition |
    IExampleScenario |
    IExplanationOfBenefit |
    IFamilyMemberHistory |
    IFlag |
    IGoal |
    IGraphDefinition |
    IGroup |
    IGuidanceResponse |
    IHealthcareService |
    IImagingStudy |
    IImmunization |
    IImmunizationEvaluation |
    IImmunizationRecommendation |
    IImplementationGuide |
    IInsurancePlan |
    IInvoice |
    ILibrary |
    ILinkage |
    IList |
    ILocation |
    IMeasure |
    IMeasureReport |
    IMedia |
    IMedication |
    IMedicationAdministration |
    IMedicationDispense |
    IMedicationKnowledge |
    IMedicationRequest |
    IMedicationStatement |
    IMedicinalProduct |
    IMedicinalProductAuthorization |
    IMedicinalProductContraindication |
    IMedicinalProductIndication |
    IMedicinalProductIngredient |
    IMedicinalProductInteraction |
    IMedicinalProductManufactured |
    IMedicinalProductPackaged |
    IMedicinalProductPharmaceutical |
    IMedicinalProductUndesirableEffect |
    IMessageDefinition |
    IMessageHeader |
    INamingSystem |
    INutritionOrder |
    IObservation |
    IObservationDefinition |
    IOperationDefinition |
    IOperationOutcome |
    IOrganization |
    IOrganizationAffiliation |
    IParameters |
    IPatient |
    IPaymentNotice |
    IPaymentReconciliation |
    IPerson |
    IPlanDefinition |
    IPractitioner |
    IPractitionerRole |
    IProcedure |
    IProvenance |
    IQuestionnaire |
    IQuestionnaireResponse |
    IRelatedPerson |
    IRequestGroup |
    IResearchStudy |
    IResearchSubject |
    IRiskAssessment |
    ISchedule |
    ISearchParameter |
    IServiceRequest |
    ISlot |
    ISpecimen |
    ISpecimenDefinition |
    IStructureDefinition |
    IStructureMap |
    ISubscription |
    ISubstance |
    ISubstancePolymer |
    ISubstanceReferenceInformation |
    ISubstanceSpecification |
    ISupplyDelivery |
    ISupplyRequest |
    ITask |
    ITerminologyCapabilities |
    ITestReport |
    ITestScript |
    IValueSet |
    IVerificationResult |
    IVisionPrescription;

export const RTTI_ResourceList: t.Type<IResourceList> = t.recursion('IResourceList', () =>
    t.union([
        RTTI_Account,
        RTTI_ActivityDefinition,
        RTTI_AdverseEvent,
        RTTI_AllergyIntolerance,
        RTTI_Appointment,
        RTTI_AppointmentResponse,
        RTTI_AuditEvent,
        RTTI_Basic,
        RTTI_Binary,
        RTTI_BiologicallyDerivedProduct,
        RTTI_BodyStructure,
        RTTI_Bundle,
        RTTI_CapabilityStatement,
        RTTI_CarePlan,
        RTTI_CareTeam,
        RTTI_ChargeItem,
        RTTI_ChargeItemDefinition,
        RTTI_Claim,
        RTTI_ClaimResponse,
        RTTI_ClinicalImpression,
        RTTI_CodeSystem,
        RTTI_Communication,
        RTTI_CommunicationRequest,
        RTTI_CompartmentDefinition,
        RTTI_Composition,
        RTTI_ConceptMap,
        RTTI_Condition,
        RTTI_Consent,
        RTTI_Contract,
        RTTI_Coverage,
        RTTI_CoverageEligibilityRequest,
        RTTI_CoverageEligibilityResponse,
        RTTI_DetectedIssue,
        RTTI_Device,
        RTTI_DeviceDefinition,
        RTTI_DeviceMetric,
        RTTI_DeviceRequest,
        RTTI_DeviceUseStatement,
        RTTI_DiagnosticReport,
        RTTI_DocumentManifest,
        RTTI_DocumentReference,
        RTTI_Encounter,
        RTTI_Endpoint,
        RTTI_EnrollmentRequest,
        RTTI_EnrollmentResponse,
        RTTI_EpisodeOfCare,
        RTTI_EventDefinition,
        RTTI_ExampleScenario,
        RTTI_ExplanationOfBenefit,
        RTTI_FamilyMemberHistory,
        RTTI_Flag,
        RTTI_Goal,
        RTTI_GraphDefinition,
        RTTI_Group,
        RTTI_GuidanceResponse,
        RTTI_HealthcareService,
        RTTI_ImagingStudy,
        RTTI_Immunization,
        RTTI_ImmunizationEvaluation,
        RTTI_ImmunizationRecommendation,
        RTTI_ImplementationGuide,
        RTTI_InsurancePlan,
        RTTI_Invoice,
        RTTI_Library,
        RTTI_Linkage,
        RTTI_List,
        RTTI_Location,
        RTTI_Measure,
        RTTI_MeasureReport,
        RTTI_Media,
        RTTI_Medication,
        RTTI_MedicationAdministration,
        RTTI_MedicationDispense,
        RTTI_MedicationKnowledge,
        RTTI_MedicationRequest,
        RTTI_MedicationStatement,
        RTTI_MedicinalProduct,
        RTTI_MedicinalProductAuthorization,
        RTTI_MedicinalProductContraindication,
        RTTI_MedicinalProductIndication,
        RTTI_MedicinalProductIngredient,
        RTTI_MedicinalProductInteraction,
        RTTI_MedicinalProductManufactured,
        RTTI_MedicinalProductPackaged,
        RTTI_MedicinalProductPharmaceutical,
        RTTI_MedicinalProductUndesirableEffect,
        RTTI_MessageDefinition,
        RTTI_MessageHeader,
        RTTI_NamingSystem,
        RTTI_NutritionOrder,
        RTTI_Observation,
        RTTI_ObservationDefinition,
        RTTI_OperationDefinition,
        RTTI_OperationOutcome,
        RTTI_Organization,
        RTTI_OrganizationAffiliation,
        RTTI_Parameters,
        RTTI_Patient,
        RTTI_PaymentNotice,
        RTTI_PaymentReconciliation,
        RTTI_Person,
        RTTI_PlanDefinition,
        RTTI_Practitioner,
        RTTI_PractitionerRole,
        RTTI_Procedure,
        RTTI_Provenance,
        RTTI_Questionnaire,
        RTTI_QuestionnaireResponse,
        RTTI_RelatedPerson,
        RTTI_RequestGroup,
        RTTI_ResearchStudy,
        RTTI_ResearchSubject,
        RTTI_RiskAssessment,
        RTTI_Schedule,
        RTTI_SearchParameter,
        RTTI_ServiceRequest,
        RTTI_Slot,
        RTTI_Specimen,
        RTTI_SpecimenDefinition,
        RTTI_StructureDefinition,
        RTTI_StructureMap,
        RTTI_Subscription,
        RTTI_Substance,
        RTTI_SubstancePolymer,
        RTTI_SubstanceReferenceInformation,
        RTTI_SubstanceSpecification,
        RTTI_SupplyDelivery,
        RTTI_SupplyRequest,
        RTTI_Task,
        RTTI_TerminologyCapabilities,
        RTTI_TestReport,
        RTTI_TestScript,
        RTTI_ValueSet,
        RTTI_VerificationResult,
        RTTI_VisionPrescription
    ])
);
