# 4.0.5
- Fix check issue with enums

#4.0.4

#4.0.3

# 4.0.2
- Implement FHIR Resources with io-ts
- You can now validate your json and strongly type data.  

**known limitation**
Currently an issue occurs with io-ts union that prevent the use caontained property of FHIR Resources. So for now there are deactivated.

# 4.0.1
- Fix: properties are now lowercase as FHIR spec 
- Fix: Enum generation 

# 4.0.0
- Create model for FHIR R4 Resources 
