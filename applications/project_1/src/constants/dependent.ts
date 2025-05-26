import type { RJSFSchema } from '@rjsf/utils';

export const dependentSchema = {
  type: 'object',
  progressBar: true,
  required: [
    'salutation',
    'accountName',
    'dateOfBirthBS',
    'dateOfBirthAD',
    'education',
    'genders',
    'nationality',
    'preferredBranch',
    'permanentCountry',
    'mobileNumber',
    'emailAddress',
    'temporaryCountry',
    'fatherName',
    'motherName',
    'grandFatherName',
    'grandMotherName',
    'marital_status',
    'ppSizePhoto',

    'religion',
    'nationalIdentityNo',
    'nationalIssuedDistrict',
    'nationalIssuedDateBS',
    'nationalIssuedDateAD',
  ],
  properties: {
    salutation: {
      type: 'string',
      title: 'Salutation',

      width: 'full',
      errorMessage: {
        required: 'Salutation is required.',
      },
    },
    minorCase: {
      type: 'boolean',
      default: false,
    },
    accountName: {
      type: 'string',
      title: 'Account Name',
      minLength: 1,
    },
    dateOfBirthBS: {
      type: 'string',
      title: 'Date of Birth (B.S)',

      minLength: 1,
    },
    dateOfBirthAD: {
      type: 'string',
      title: 'Date of Birth (A.D)',
      minLength: 1,
    },
    genders: {
      type: 'string',
      title: 'Gender',
    },
    nationality: {
      type: 'string',
      title: 'Nationality',
    },
    religion: {
      type: 'string',
      title: 'Religion',
    },
    education: {
      type: 'string',
      enum: ['Literate', 'Others'],
      title: 'Education',
    },
    preferredBranch: {
      type: 'string',
      title: 'Branch',
    },
    permanentCountry: {
      type: 'string',
      default: 'c4dd1f9b-2322-11f0-8abe-02420a00460d',
      title: 'Permanent Country',
      
    },
    permanentPhoneNo: {
      type: 'string',
      title: 'Phone No',
      
    },
    permanentSearchAddress: {
      type: 'string',
      width: 'full',
      title: 'Search Permanent Address',
      
    },
    permanentMap: {
      type: 'string',
      title: 'Choose a Location',
      
      isMapField: true,
      width: 'full',
    },
    sameAsPermanent: {
      type: 'string',
      title: 'Same As Permanent Address',
      enum: ['Yes', 'No'],
    },
    temporaryCountry: {
      type: 'string',
      title: 'Current Country',
      default: 'c4dd1f9b-2322-11f0-8abe-02420a00460d',
    },
    temporaryPhoneNo: {
      type: 'string',
      title: 'Phone No',
    },
    temporarySearchAddress: {
      type: 'string',
      title: 'Search Current Address',

      width: 'full',
    },
    temporaryMap: {
      type: 'string',
      title: 'Choose a Location',

      isMapField: true,
      width: 'full',
    },
    newNumber: {
      type: 'boolean',
      title: 'New Number ?',
      default: false,
      group: 'communicationDetails',
      width: 'full',
    },
    phoneNo: {
      type: ['string', 'null'],
      title: 'Phone No',
      group: 'communicationDetails',
    },
    mobileNumber: {
      type: 'string',
      title: 'Mobile Number',
      group: 'communicationDetails',
      pattern: '^9\\d{9}$',
      errorMessage: {
        pattern:
          'Mobile number must start with 9 and be exactly 10 digits long',
      },
    },
    emailAddress: {
      type: 'string',
      title: 'Email Address',
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      default: '',
      errorMessage: {
        pattern: 'Invalid email address',
      },
      group: 'communicationDetails',
    },
    identificationDocuments: {
      type: 'array',
      title: 'Identification Details',
      width: 'full',
      items: {
        type: 'object',
        properties: {
          documentType: {
            type: 'string',
            enum: [
              'Citizenship',
              'Passport',
              'Driving License',
              'Voter ID',
              'Government ID',
              'Pan Card',
              'Birth Certificate',
              'Other ID',
            ],
            title: 'Identification Document Type',
          },
          identityNo: {
            type: 'string',
            title: 'Identity No',
            pattern: '^\\d+(?:-\\d+)*$',
            minLength: 1,
            errorMessage: {
              pattern: 'Only digits and dashes are allowed (e.g., 69-711-76)',
            },
          },
          issuedDistrict: {
            type: 'string',
            title: 'Issued District',
          },
          issuedDateBS: {
            type: 'string',
            format: 'date',
            title: 'Issued Date (B.S)',
          },
          issuedDateAD: {
            type: 'string',
            format: 'date',
            title: 'Issued Date (A.D)',
          },
        },
        dependencies: {
          documentType: {
            if: {
              properties: {
                documentType: {
                  enum: ['Citizenship'],
                },
              },
            },
            then: {},
            else: {
              required: ['idateOfExpiryBS', 'idateOfExpiryAD'],
              properties: {
                idateOfExpiryBS: {
                  type: 'string',
                  title: 'Date of Expiry (B.S.)',
                  format: 'date',
                },
                idateOfExpiryAD: {
                  type: 'string',
                  title: 'Date of Expiry (A.D.)',
                  format: 'date',
                },
              },
            },
          },
        },
        required: [
          'documentType',
          'identityNo',
          'issuedDistrict',
          'issuedDateBS',
          'issuedDateAD',
        ],
      },
      minItems: 1,
      group: 'identificationDetails',
    },
    panNo: {
      type: ['number', 'null'],
      title: 'Pan No.',
      
    },
    panNoIssuedDateBS: {
      type: 'string',
      format: 'date',
      title: 'Pan No. Issued Date (B.S)',
      
    },
    panNoIssuedDateAD: {
      type: 'string',
      format: 'date',
      title: 'Pan No. Issued Date (A.D)',
      
    },
    nationalIdentityNo: {
      type: ['string', 'null'],
      title: 'Identity No',

      pattern: '^\\d+(?:-\\d+)*$',
      errorMessage: {
        pattern: 'Invalid national identity no.',
        type: 'required',
      },
    },
    nationalIssuedDistrict: {
      type: 'string',
      title: 'Issued District',

      errorMessage: {
        type: 'Required',
      },
    },
    nationalIssuedDateBS: {
      type: ['string', 'null'],
      format: 'date',
      title: 'Issued Date (B.S)',
    },
    nationalIssuedDateAD: {
      type: ['string', 'null'],
      format: 'date',
      title: 'Issued Date (A.D)',
    },
    ppSizePhoto: {
      type: 'string',
      title: 'Passport Sized Photo',
      group: 'documents',
      isFileField: true,
      width: 'full',
    },
    fatherName: {
      type: 'string',
      title: "Father's Name",
      
      minLength: 1,
    },
    motherName: {
      type: 'string',
      title: "Mother's Name",
      minLength: 1,

      
    },
    grandFatherName: {
      type: 'string',
      title: "Grand Father's Name",
      minLength: 1,

      
    },
    grandMotherName: {
      type: 'string',
      title: "Grand Mother's Name",
      
      minLength: 1,
    },
    marital_status: {
      type: 'string',
      title: 'Marital Status',
      
      errorMessage: {
        type: 'Invalid status',
      },
    },
  },
  keys: ['formData.salutation'],
  dependencies: {
    minorCase: {
      oneOf: [
        {
          required: [
            'guardianFirstName',
            'guardianLastName',
            'relationWithApplicant',
            'identityDocumentType',
            'identityNumber',
            'guardianGrandFatherName',
            'guardianFatherName',
            'dateOfIssuanceAD',
            'dateOfIssuanceBS',
            'placeOfIssuance',
            'guardainIdFront',
            'candidateBirthCertificate',
            'guardainIdBack',
            'guardainPpSizePhoto',
          ],
          properties: {
            minorCase: {
              const: true,
            },
            guardianFirstName: {
              type: 'string',
              title: 'Guardian First Name',
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            guardianMiddleName: {
              type: 'string',
              title: 'Guardian Middle Name',
              group: 'guardianDetail',
            },
            guardianLastName: {
              type: 'string',
              title: 'Guardian Last Name',
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            relationWithApplicant: {
              type: 'string',
              title: 'Relation with Applicant',
              group: 'guardianDetail',
            },
            guardianFatherName: {
              type: 'string',
              title: "Father's Name",
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            guardianGrandFatherName: {
              type: 'string',
              title: "Grandfather's Name",
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            identityDocumentType: {
              type: 'string',
              title: 'Guardian Identification Document Type',
              group: 'guardianDetail',
              enum: [
                'Citizenship',
                'Passport',
                'Driving License',
                'Voter ID',
                'Government ID',
                'Pan Card',
                'Other ID',
              ],
            },
            identityNumber: {
              type: 'string',
              title: 'ID Number',
              maxLength: 50,
              pattern: '^\\d+$',
              errorMessage: {
                pattern: 'Numbers only',
              },
              group: 'guardianDetail',
            },
            placeOfIssuance: {
              type: 'string',
              title: 'Place of Issuance',
              maxLength: 100,
              group: 'guardianDetail',
            },
            dateOfIssuanceBS: {
              type: 'string',
              title: 'Date of Issuance (B.S.)',
              format: 'date',
              group: 'guardianDetail',
            },
            dateOfIssuanceAD: {
              type: 'string',
              title: 'Date of Issuance (A.D.)',
              format: 'date',
              group: 'guardianDetail',
            },
            candidateBirthCertificate: {
              type: 'string',
              title: 'Candidate Birth Certificate',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainIdFront: {
              type: 'string',
              title: 'Guardian Id Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainIdBack: {
              type: 'string',
              title: 'Guardian Id Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainPpSizePhoto: {
              type: 'string',
              title: 'Guardian Passport Sized Photo',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
          },
          dependencies: {
            identityDocumentType: {
              if: {
                properties: {
                  identityDocumentType: {
                    enum: ['Citizenship'],
                  },
                },
              },
              then: {},
              else: {
                required: ['gDateOfExpiryAD', 'gDateOfExpiryBS'],
                properties: {
                  gDateOfExpiryBS: {
                    type: 'string',
                    title: 'Date of Expiry (B.S.)',
                    format: 'date',
                    group: 'guardianDetail',
                  },
                  gDateOfExpiryAD: {
                    type: 'string',
                    title: 'Date of Expiry (A.D.)',
                    format: 'date',
                    group: 'guardianDetail',
                  },
                },
              },
            },
          },
        },
        {
          required: ['citizenshipFront', 'citizenshipBack'],
          properties: {
            minorCase: {
              const: false,
            },
            citizenshipFront: {
              type: 'string',
              title: 'Citizenship Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            citizenshipBack: {
              type: 'string',
              title: 'Citizenship Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            panCardFront: {
              type: 'string',
              title: 'Pancard Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            PanCardBack: {
              type: 'string',
              title: 'Pancard Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
          },
        },
      ],
    },
    permanentCountry: {
      if: {
        properties: {
          permanentCountry: {
            enum: ['c4dd1f9b-2322-11f0-8abe-02420a00460d'],
          },
        },
      },
      then: {
        required: [
          'permanentProvince',
          'permanentDistrict',
          'permanentLocalBody',
          'permanentToleStreet',
          'permanentWardNo',
        ],
        properties: {
          permanentProvince: {
            type: 'string',
            title: 'Permanent Province',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentDistrict: {
            type: 'string',
            title: 'Permanent District',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentLocalBody: {
            type: 'string',
            title: 'Permanent Local Body',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentHouseNo: {
            type: 'string',
            title: 'House No',
            
          },
          permanentWardNo: {
            type: 'string',
            title: 'Ward No',
            pattern: '^\\d+$',
            errorMessage: {
              type: 'Required',
            },
            
          },
          permanentToleStreet: {
            type: 'string',
            title: 'Tole/Street',
            pattern: '^[a-zA-Z\\s]+$',
            errorMessage: {
              type: 'Required',
            },
            
          },
        },
      },
      else: {
        required: ['permanentFullAddress'],
        properties: {
          permanentFullAddress: {
            type: 'string',
            title: 'Full Address ',
            
            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
    },
    temporaryCountry: {
      if: {
        properties: {
          temporaryCountry: {
            enum: ['c4dd1f9b-2322-11f0-8abe-02420a00460d'],
          },
        },
      },
      then: {
        required: [
          'temporaryProvince',
          'temporaryDistrict',
          'temporaryLocalBody',
          'temporaryToleStreet',
          'temporaryWardNo',
        ],
        properties: {
          temporaryProvince: {
            type: 'string',
            title: 'Current Province',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryDistrict: {
            type: 'string',
            title: 'Current District',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryLocalBody: {
            type: 'string',
            title: 'Current Local Body',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryHouseNo: {
            type: 'string',
            title: 'House No',
          },
          temporaryWardNo: {
            type: 'string',
            title: 'Ward No',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryToleStreet: {
            type: 'string',
            title: 'Tole/Street',
            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
      else: {
        required: ['temporaryFullAddress'],
        properties: {
          temporaryFullAddress: {
            type: 'string',
            title: 'Full Address ',

            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
    },
    marital_status: {
      if: {
        properties: {
          marital_status: {
            enum: ['1'],
          },
        },
      },
      then: {},
      else: {
        properties: {
          spouseName: {
            type: 'string',
            title: 'Spouse Name',
            minLength: 1,
            
            
          },
          childrenDetails: {
            type: 'array',
            width: 'full',
            group: 'children',
            items: {
              type: 'object',
              properties: {
                childType: {
                  type: 'string',
                  title: 'Type',
                  enum: ['Son', 'Daughter'],
                },
                name: {
                  type: 'string',
                  title: 'Name',
                },
              },
            },
          },
          daughterInLaw: {
            type: ['string', 'null'],
            title: 'Daughter In Law',
            
          },
          motherInLaw: {
            type: 'string',
            title: 'Mother In Law',
            minLength: 1,
            
            
          },
          fatherInLaw: {
            type: 'string',
            title: 'Father In Law',
            minLength: 1,
            
            
          },
        },
        required: ['spouseName', 'motherInLaw', 'fatherInLaw'],
      },
    },
    sameAsPermanent: {
      oneOf: [
        {
          properties: {
            sameAsPermanent: {
              const: 'Yes',
            },
            temporaryCountry: {
              readOnly: true,
            },
            temporaryProvince: {
              readOnly: true,
            },
            temporaryDistrict: {
              readOnly: true,
            },
            temporaryLocalBody: {
              readOnly: true,
            },
            temporaryHouseNo: {
              readOnly: true,
            },
            temporaryWardNo: {
              readOnly: true,
            },
            temporaryToleStreet: {
              readOnly: true,
            },
            temporaryPhoneNo: {
              readOnly: true,
            },
            temporarySearchAddress: {
              readOnly: true,
            },
            temporaryMap: {
              readOnly: true,
            },
          },
        },
        {
          properties: {
            sameAsPermanent: {
              const: 'No',
            },
            temporaryCountry: {
              readOnly: false,
            },
          },
        },
      ],
    },
    newNumber: {
      if: {
        properties: {
          newNumber: {
            const: true,
          },
        },
      },
      then: {
        properties: {
          newMobileNumber: {
            type: 'string',
            title: 'New Mobile Number',
            group: 'communicationDetails',
            pattern: '^9\\d{9}$',
            errorMessage: {
              pattern:
                'Mobile number must start with 9 and be exactly 10 digits long',
            },
          },
          newNumberDocument: {
            type: 'string',
            title: 'New Number',
            group: 'documents',
            isFileField: true,
            width: 'full',
          },
        },
        required: ['newMobileNumber'],
      },
    },
  },
};

const docTypes = ['PDF', 'Word', 'Excel'];

export const docUploadSchema: RJSFSchema = {
  type: 'object',
  title: 'User Docs',
  properties: {
    documents: {
      title: 'User Info',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          docType: {
            type: 'string',
            title: 'Document Type',
            enum: docTypes,
            default: 'PDF',
          },
          name: {
            type: 'string',
            title: 'User Name',
          },
        },
        required: ['docType', 'name'],
      },
    },
    documentUpload: {
      type: 'object',
      properties: {},
    },
  },
  dependencies: {
    documents: {
      allOf: docTypes.map((docType) => ({
        if: {
          properties: {
            documents: {
              contains: {
                type: 'object',
                properties: {
                  docType: { const: docType },
                },
                required: ['docType'],
              },
            },
          },
        },
        then: {
          properties: {
            documentUpload: {
              properties: {
                [`${docType.toLowerCase()}Document`]: {
                  type: 'string',
                  title: `${docType} Document`,
                },
              },
            },
          },
        },
      })),
    },
  },
};

const documentTypes = [
  'Citizenship',
  'Passport',
  'DrivingLicense',
  'VoterID',
  'GovernmentID',
  'PanCard',
  'BirthCertificate',
  'OtherID',
];

export const realExpDocExpSchema: RJSFSchema = {
  type: 'object',
  progressBar: true,
  required: [
    'salutation',
    'accountName',
    'dateOfBirthBS',
    'dateOfBirthAD',
    'education',
    'genders',
    'nationality',
    'preferredBranch',
    'permanentCountry',
    'mobileNumber',
    'emailAddress',
    'temporaryCountry',
    'fatherName',
    'motherName',
    'grandFatherName',
    'grandMotherName',
    'marital_status',
    'ppSizePhoto',

    'religion',
    'nationalIdentityNo',
    'nationalIssuedDistrict',
    'nationalIssuedDateBS',
    'nationalIssuedDateAD',
  ],
  properties: {
    salutation: {
      type: 'string',
      title: 'Salutation',

      width: 'full',
      errorMessage: {
        required: 'Salutation is required.',
      },
    },
    minorCase: {
      type: 'boolean',
      default: false,
    },
    accountName: {
      type: 'string',
      title: 'Account Name',
      minLength: 1,
    },
    dateOfBirthBS: {
      type: 'string',
      title: 'Date of Birth (B.S)',

      minLength: 1,
    },
    dateOfBirthAD: {
      type: 'string',
      title: 'Date of Birth (A.D)',
      minLength: 1,
    },
    genders: {
      type: 'string',
      title: 'Gender',
    },
    nationality: {
      type: 'string',
      title: 'Nationality',
    },
    religion: {
      type: 'string',
      title: 'Religion',
    },
    education: {
      type: 'string',
      enum: ['Literate', 'Others'],
      title: 'Education',
    },
    preferredBranch: {
      type: 'string',
      title: 'Branch',
    },
    permanentCountry: {
      type: 'string',
      default: 'c4dd1f9b-2322-11f0-8abe-02420a00460d',
      title: 'Permanent Country',
      
    },
    permanentPhoneNo: {
      type: 'string',
      title: 'Phone No',
      
    },
    permanentSearchAddress: {
      type: 'string',
      width: 'full',
      title: 'Search Permanent Address',
      
    },
    permanentMap: {
      type: 'string',
      title: 'Choose a Location',
      
      isMapField: true,
      width: 'full',
    },
    sameAsPermanent: {
      type: 'string',
      title: 'Same As Permanent Address',
      enum: ['Yes', 'No'],
    },
    temporaryCountry: {
      type: 'string',
      title: 'Current Country',
      default: 'c4dd1f9b-2322-11f0-8abe-02420a00460d',
    },
    temporaryPhoneNo: {
      type: 'string',
      title: 'Phone No',
    },
    temporarySearchAddress: {
      type: 'string',
      title: 'Search Current Address',

      width: 'full',
    },
    temporaryMap: {
      type: 'string',
      title: 'Choose a Location',

      isMapField: true,
      width: 'full',
    },
    newNumber: {
      type: 'boolean',
      title: 'New Number ?',
      default: false,
      group: 'communicationDetails',
      width: 'full',
    },
    phoneNo: {
      type: ['string', 'null'],
      title: 'Phone No',
      group: 'communicationDetails',
    },
    mobileNumber: {
      type: 'string',
      title: 'Mobile Number',
      group: 'communicationDetails',
      pattern: '^9\\d{9}$',
      errorMessage: {
        pattern:
          'Mobile number must start with 9 and be exactly 10 digits long',
      },
    },
    emailAddress: {
      type: 'string',
      title: 'Email Address',
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      default: '',
      errorMessage: {
        pattern: 'Invalid email address',
      },
      group: 'communicationDetails',
    },
    identificationDocuments: {
      type: 'array',
      title: 'Identification Details',
      width: 'full',
      items: {
        type: 'object',
        properties: {
          documentType: {
            type: 'string',
            enum: documentTypes,
            title: 'Identification Document Type',
            default: 'Passport',
          },
          identityNo: {
            type: 'string',
            title: 'Identity No',
            pattern: '^\\d+(?:-\\d+)*$',
            minLength: 1,
            errorMessage: {
              pattern: 'Only digits and dashes are allowed (e.g., 69-711-76)',
            },
          },
          issuedDistrict: {
            type: 'string',
            title: 'Issued District',
          },
          issuedDateBS: {
            type: 'string',
            format: 'date',
            title: 'Issued Date (B.S)',
          },
          issuedDateAD: {
            type: 'string',
            format: 'date',
            title: 'Issued Date (A.D)',
          },
        },
        dependencies: {
          documentType: {
            if: {
              properties: {
                documentType: {
                  enum: ['Citizenship'],
                },
              },
            },
            then: {},
            else: {
              required: ['idateOfExpiryBS', 'idateOfExpiryAD'],
              properties: {
                idateOfExpiryBS: {
                  type: 'string',
                  title: 'Date of Expiry (B.S.)',
                  format: 'date',
                },
                idateOfExpiryAD: {
                  type: 'string',
                  title: 'Date of Expiry (A.D.)',
                  format: 'date',
                },
              },
            },
          },
        },
        required: [
          'documentType',
          'identityNo',
          'issuedDistrict',
          'issuedDateBS',
          'issuedDateAD',
        ],
      },
      minItems: 1,
      group: 'identificationDetails',
    },
    documentUpload: {
      type: 'object',
      properties: {},
    },
    panNo: {
      type: ['number', 'null'],
      title: 'Pan No.',
      
    },
    panNoIssuedDateBS: {
      type: 'string',
      format: 'date',
      title: 'Pan No. Issued Date (B.S)',
      
    },
    panNoIssuedDateAD: {
      type: 'string',
      format: 'date',
      title: 'Pan No. Issued Date (A.D)',
      
    },
    nationalIdentityNo: {
      type: ['string', 'null'],
      title: 'Identity No',

      pattern: '^\\d+(?:-\\d+)*$',
      errorMessage: {
        pattern: 'Invalid national identity no.',
        type: 'required',
      },
    },
    nationalIssuedDistrict: {
      type: 'string',
      title: 'Issued District',

      errorMessage: {
        type: 'Required',
      },
    },
    nationalIssuedDateBS: {
      type: ['string', 'null'],
      format: 'date',
      title: 'Issued Date (B.S)',
    },
    nationalIssuedDateAD: {
      type: ['string', 'null'],
      format: 'date',
      title: 'Issued Date (A.D)',
    },
    ppSizePhoto: {
      type: 'string',
      title: 'Passport Sized Photo',
      group: 'documents',
      isFileField: true,
      width: 'full',
    },
    fatherName: {
      type: 'string',
      title: "Father's Name",
      
      minLength: 1,
    },
    motherName: {
      type: 'string',
      title: "Mother's Name",
      minLength: 1,

      
    },
    grandFatherName: {
      type: 'string',
      title: "Grand Father's Name",
      minLength: 1,

      
    },
    grandMotherName: {
      type: 'string',
      title: "Grand Mother's Name",
      
      minLength: 1,
    },
    marital_status: {
      type: 'string',
      title: 'Marital Status',
      
      errorMessage: {
        type: 'Invalid status',
      },
    },
  },
  keys: ['formData.salutation'],
  dependencies: {
    minorCase: {
      oneOf: [
        {
          required: [
            'guardianFirstName',
            'guardianLastName',
            'relationWithApplicant',
            'identityDocumentType',
            'identityNumber',
            'guardianGrandFatherName',
            'guardianFatherName',
            'dateOfIssuanceAD',
            'dateOfIssuanceBS',
            'placeOfIssuance',
            'guardainIdFront',
            'candidateBirthCertificate',
            'guardainIdBack',
            'guardainPpSizePhoto',
          ],
          properties: {
            minorCase: {
              const: true,
            },
            guardianFirstName: {
              type: 'string',
              title: 'Guardian First Name',
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            guardianMiddleName: {
              type: 'string',
              title: 'Guardian Middle Name',
              group: 'guardianDetail',
            },
            guardianLastName: {
              type: 'string',
              title: 'Guardian Last Name',
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            relationWithApplicant: {
              type: 'string',
              title: 'Relation with Applicant',
              group: 'guardianDetail',
            },
            guardianFatherName: {
              type: 'string',
              title: "Father's Name",
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            guardianGrandFatherName: {
              type: 'string',
              title: "Grandfather's Name",
              group: 'guardianDetail',
              pattern: '^[a-zA-Z\\s]+$',
              errorMessage: {
                pattern: 'Alphabets and spaces only',
              },
            },
            identityDocumentType: {
              type: 'string',
              title: 'Guardian Identification Document Type',
              group: 'guardianDetail',
              enum: [
                'Citizenship',
                'Passport',
                'Driving License',
                'Voter ID',
                'Government ID',
                'Pan Card',
                'Other ID',
              ],
            },
            identityNumber: {
              type: 'string',
              title: 'ID Number',
              maxLength: 50,
              pattern: '^\\d+$',
              errorMessage: {
                pattern: 'Numbers only',
              },
              group: 'guardianDetail',
            },
            placeOfIssuance: {
              type: 'string',
              title: 'Place of Issuance',
              maxLength: 100,
              group: 'guardianDetail',
            },
            dateOfIssuanceBS: {
              type: 'string',
              title: 'Date of Issuance (B.S.)',
              format: 'date',
              group: 'guardianDetail',
            },
            dateOfIssuanceAD: {
              type: 'string',
              title: 'Date of Issuance (A.D.)',
              format: 'date',
              group: 'guardianDetail',
            },
            candidateBirthCertificate: {
              type: 'string',
              title: 'Candidate Birth Certificate',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainIdFront: {
              type: 'string',
              title: 'Guardian Id Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainIdBack: {
              type: 'string',
              title: 'Guardian Id Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            guardainPpSizePhoto: {
              type: 'string',
              title: 'Guardian Passport Sized Photo',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
          },
          dependencies: {
            identityDocumentType: {
              if: {
                properties: {
                  identityDocumentType: {
                    enum: ['Citizenship'],
                  },
                },
              },
              then: {},
              else: {
                required: ['gDateOfExpiryAD', 'gDateOfExpiryBS'],
                properties: {
                  gDateOfExpiryBS: {
                    type: 'string',
                    title: 'Date of Expiry (B.S.)',
                    format: 'date',
                    group: 'guardianDetail',
                  },
                  gDateOfExpiryAD: {
                    type: 'string',
                    title: 'Date of Expiry (A.D.)',
                    format: 'date',
                    group: 'guardianDetail',
                  },
                },
              },
            },
          },
        },
        {
          required: ['citizenshipFront', 'citizenshipBack'],
          properties: {
            minorCase: {
              const: false,
            },
            citizenshipFront: {
              type: 'string',
              title: 'Citizenship Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            citizenshipBack: {
              type: 'string',
              title: 'Citizenship Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            panCardFront: {
              type: 'string',
              title: 'Pancard Front',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
            PanCardBack: {
              type: 'string',
              title: 'Pancard Back',
              group: 'documents',
              isFileField: true,
              width: 'full',
            },
          },
        },
      ],
    },
    permanentCountry: {
      if: {
        properties: {
          permanentCountry: {
            enum: ['c4dd1f9b-2322-11f0-8abe-02420a00460d'],
          },
        },
      },
      then: {
        required: [
          'permanentProvince',
          'permanentDistrict',
          'permanentLocalBody',
          'permanentToleStreet',
          'permanentWardNo',
        ],
        properties: {
          permanentProvince: {
            type: 'string',
            title: 'Permanent Province',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentDistrict: {
            type: 'string',
            title: 'Permanent District',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentLocalBody: {
            type: 'string',
            title: 'Permanent Local Body',
            
            errorMessage: {
              type: 'Required',
            },
          },
          permanentHouseNo: {
            type: 'string',
            title: 'House No',
            
          },
          permanentWardNo: {
            type: 'string',
            title: 'Ward No',
            pattern: '^\\d+$',
            errorMessage: {
              type: 'Required',
            },
            
          },
          permanentToleStreet: {
            type: 'string',
            title: 'Tole/Street',
            pattern: '^[a-zA-Z\\s]+$',
            errorMessage: {
              type: 'Required',
            },
            
          },
        },
      },
      else: {
        required: ['permanentFullAddress'],
        properties: {
          permanentFullAddress: {
            type: 'string',
            title: 'Full Address ',
            
            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
    },
    temporaryCountry: {
      if: {
        properties: {
          temporaryCountry: {
            enum: ['c4dd1f9b-2322-11f0-8abe-02420a00460d'],
          },
        },
      },
      then: {
        required: [
          'temporaryProvince',
          'temporaryDistrict',
          'temporaryLocalBody',
          'temporaryToleStreet',
          'temporaryWardNo',
        ],
        properties: {
          temporaryProvince: {
            type: 'string',
            title: 'Current Province',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryDistrict: {
            type: 'string',
            title: 'Current District',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryLocalBody: {
            type: 'string',
            title: 'Current Local Body',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryHouseNo: {
            type: 'string',
            title: 'House No',
          },
          temporaryWardNo: {
            type: 'string',
            title: 'Ward No',

            errorMessage: {
              type: 'Required',
            },
          },
          temporaryToleStreet: {
            type: 'string',
            title: 'Tole/Street',
            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
      else: {
        required: ['temporaryFullAddress'],
        properties: {
          temporaryFullAddress: {
            type: 'string',
            title: 'Full Address ',

            errorMessage: {
              type: 'Required',
            },
          },
        },
      },
    },
    marital_status: {
      if: {
        properties: {
          marital_status: {
            enum: ['1'],
          },
        },
      },
      then: {},
      else: {
        properties: {
          spouseName: {
            type: 'string',
            title: 'Spouse Name',
            minLength: 1,
            
            
          },
          childrenDetails: {
            type: 'array',
            width: 'full',
            group: 'children',
            items: {
              type: 'object',
              properties: {
                childType: {
                  type: 'string',
                  title: 'Type',
                  enum: ['Son', 'Daughter'],
                },
                name: {
                  type: 'string',
                  title: 'Name',
                },
              },
            },
          },
          daughterInLaw: {
            type: ['string', 'null'],
            title: 'Daughter In Law',
            
          },
          motherInLaw: {
            type: 'string',
            title: 'Mother In Law',
            minLength: 1,
            
            
          },
          fatherInLaw: {
            type: 'string',
            title: 'Father In Law',
            minLength: 1,
            
            
          },
        },
        required: ['spouseName', 'motherInLaw', 'fatherInLaw'],
      },
    },
    sameAsPermanent: {
      oneOf: [
        {
          properties: {
            sameAsPermanent: {
              const: 'Yes',
            },
            temporaryCountry: {
              readOnly: true,
            },
            temporaryProvince: {
              readOnly: true,
            },
            temporaryDistrict: {
              readOnly: true,
            },
            temporaryLocalBody: {
              readOnly: true,
            },
            temporaryHouseNo: {
              readOnly: true,
            },
            temporaryWardNo: {
              readOnly: true,
            },
            temporaryToleStreet: {
              readOnly: true,
            },
            temporaryPhoneNo: {
              readOnly: true,
            },
            temporarySearchAddress: {
              readOnly: true,
            },
            temporaryMap: {
              readOnly: true,
            },
          },
        },
        {
          properties: {
            sameAsPermanent: {
              const: 'No',
            },
            temporaryCountry: {
              readOnly: false,
            },
          },
        },
      ],
    },
    newNumber: {
      if: {
        properties: {
          newNumber: {
            const: true,
          },
        },
      },
      then: {
        properties: {
          newMobileNumber: {
            type: 'string',
            title: 'New Mobile Number',
            group: 'communicationDetails',
            pattern: '^9\\d{9}$',
            errorMessage: {
              pattern:
                'Mobile number must start with 9 and be exactly 10 digits long',
            },
          },
          newNumberDocument: {
            type: 'string',
            title: 'New Number',
            group: 'documents',
            isFileField: true,
            width: 'full',
          },
        },
        required: ['newMobileNumber'],
      },
    },
    identificationDocuments: {
      allOf: documentTypes.map((docType) => ({
        if: {
          properties: {
            identificationDocuments: {
              contains: {
                type: 'object',
                properties: {
                  documentType: { const: docType },
                },
                required: ['documentType'],
              },
            },
          },
        },
        then: {
          properties: {
            documentUpload: {
              properties: {
                [docType]: {
                  type: 'string',
                  title: `${docType} Document`,
                  isFileField: true,
                },
              },
              required: [docType],
            },
          },
        },
      })),
    },
  },
};

//   allOf: [
//     {
//       if: {
//         properties: {
//           documentType: {
//             contains: {
//               type: "object",
//               properties: {
//                 documentType: { const: "Passport" },
//               },
//             },
//           },
//         },
//       },
//       then: {
//         properties: {
//           documentUpload: {
//             properties: {
//               passportFront: {
//                 type: "string",
//                 title: "Passport",
//               },
//             },
//           },
//         },
//       },
//       else: {
//         properties: {
//           documentUpload: {
//             properties: {
//               passportFront: {
//                 type: "string",
//                 title: "Passport",
//                 readOnly: true,
//               },
//             },
//           },
//         },
//       },
//     },
//     {
//       if: {
//         properties: {
//           documentType: {
//             contains: {
//               type: "object",
//               properties: {
//                 documentType: { const: "Government ID" },
//               },
//             },
//           },
//         },
//       },
//       then: {
//         properties: {
//           documentUpload: {
//             properties: {
//               GovernmentID: {
//                 type: "string",
//                 title: "Government ID",
//               },
//             },
//           },
//         },
//       },
//       else: {
//         properties: {
//           documentUpload: {
//             properties: {
//               GovernmentID: {
//                 type: "string",
//                 title: "Government ID",
//                 readOnly: true,
//               },
//             },
//           },
//         },
//       },
//     },
//   ],
// },
