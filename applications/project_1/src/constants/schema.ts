import type { RJSFSchema } from "@rjsf/utils";

export const schema: RJSFSchema = {
  type: "object",
  className: "fs-1",
  hasStep: true,
  form_title: "personal_info_update",
  submissionHidden: false,
  required: [
    "first_name",
    "gender",
    "date_of_birth_ad",
    "date_of_birth_bs",
    "nationality",
    "nepali_resident",
    "currency",
    "account_purpose",
    "literacy",
    "phone_area_code",
    "educational_qualification",
    "permanent_country",
    "current_country",
    "has_nominee",
    "current_spent_day",
    "contact_type",
    "occupation_type",
    "source_of_income",
    "declared_anticipated_annual_transaction",
    "expected_anticipated_annual_transaction",
    "number_of_transaction",
    "transaction_fund_details",
    "transaction_justification",
    "pep",
    "pep_declaration",
    "adverse_media",
    "crime_in_past",
    "residential_permit",
    "is_us_person",
    "beneficial_owner",
    "collect",
    "email_template",
    "need_check_book",
    "debit_card",
    "need_locker",
    "customer_account_status",
    "loan_status",
    "met_in_person",
    "customer_business_involvement",
    "is_blacklisted",
    "customer_introduce_by",
    "is_customer_helpful",
    "has_document",
  ],
  properties: {
    has_cif: {
      type: "boolean",
      title: "Has CIF Number?",

      readOnly: true,
    },

    account_info: {
      type: "string",

      readOnly: true,
    },
    account_type_id: {
      type: "string",
      title: "Account Type",

      readOnly: true,
    },
    marital_status: {
      type: "string",
      title: "Marital Status",

      readOnly: true,
    },
    account_scheme_id: {
      type: "string",
      title: "Product Schema",

      readOnly: true,
    },

    salutation: {
      type: "string",
      title: "Salutation",

      readOnly: true,
    },
    first_name: {
      type: "string",
      title: "First Name",

      pattern: "^[a-zA-Z\\s]*$",

      readOnly: true,
    },
    middle_name: {
      type: "string",
      title: "Middle Name",

      pattern: "^[a-zA-Z.\\s]*$",

      readOnly: true,
    },
    last_name: {
      type: "string",
      title: "Last Name",

      pattern: "^[a-zA-Z\\s/]*$",

      readOnly: true,
    },
    last_name_not_available: {
      type: "boolean",
      title: "If last name not available?",

      readOnly: true,
    },
    gender: {
      type: "string",
      title: "Gender",

      readOnly: true,
    },
    date_of_birth_ad: {
      type: "string",
      format: "date",
      title: "Date of Birth (A.D)",

      readOnly: true,
    },
    date_of_birth_bs: {
      type: "string",
      format: "date",
      title: "Date of Birth (B.S)",

      readOnly: true,
    },
    nationality: {
      type: "string",
      title: "Nationality",

      default: "9c0c15a4-c05c-4355-a880-4c9798543152",
      readOnly: true,
    },
    nepali_resident: {
      type: "string",
      title: "Are You Non Resident Nepali?",

      enum: ["Yes", "No"],
    },

    literacy: {
      type: "string",
      title: "Literacy",
    },
    educational_qualification: {
      type: "string",
      title: "Education Qualification",
    },
    phone_area_code: {
      type: "string",
      title: "District/Area Code",

      pattern: "^(\\d{3})?$",
    },

    contact_type: {
      type: "string",
      title: "Contact Number Type",

      enum: [
        "No Contact Detail",
        "Mobile Number",
        "Phone Number",
        "Both Contact Detail",
      ],
      readOnly: true,
    },

    email: {
      type: "string",
      title: "Email Address",

      pattern: "^(N/A|\\.|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$",

      readOnly: true,
    },
    email_not_available: {
      type: "boolean",
      title: "If email not available?",

      readOnly: true,
    },
    currency: {
      type: "string",
      title: "Currency of Account",

      readOnly: true,
    },
    account_purpose: {
      type: "string",
      title: "Purpose of Account",
    },

    family_information: {
      type: "array",
      title: "Family Information",
      items: {
        type: "object",
        properties: {
          family_member_relation: {
            type: "string",
            title: "Relationship",
          },
          family_member_full_name: {
            type: "string",
            title: "Full Name",
          },
          is_family_name_not_available: {
            type: "boolean",
            title: "Family Not Available?",
          },
        },
        dependencies: {
          is_family_name_not_available: {
            oneOf: [
              {
                properties: {
                  is_family_name_not_available: {
                    const: true,
                  },
                  family_member_full_name: {
                    readOnly: true,
                  },
                },
              },
              {
                properties: {
                  is_family_name_not_available: {
                    const: false,
                  },
                },
                required: ["family_member_full_name"],
              },
            ],
          },
        },
      },
    },

    permanent_country: {
      type: "string",
      title: "Permanent Country",

      default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
      readOnly: true,
    },

    current_country: {
      type: "string",
      title: "Current Country",

      default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
    },
    current_spent_day: {
      type: "string",
      title: "Have you spent 182 days in this year in Nepal?",

      enum: ["Yes", "No"],
    },

    id_type_details: {
      type: "array",
      title: "Identification Detail",

      minItems: 1,
      items: {
        type: "object",
        properties: {
          id_type_id: {
            type: "string",
            title: "Identification",
          },
        },
        required: ["id_type_id"],
        dependencies: {
          id_type_id: {
            oneOf: [
              {
                properties: {
                  id_type_id: {
                    enum: ["2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                          readOnly: true,
                        },
                      },
                      required: ["issued_district", "issuing_authority"],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",
                        },
                      },
                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["ce66bc73-158b-42e5-b445-095c193d0137"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },
                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "f9254205-8b66-44ca-9e75-1145a1130c78",
                          readOnly: true,
                        },
                        citizenship_number: {
                          type: "string",
                          title: "Citizenship Number",
                        },
                      },
                      required: [
                        "issued_district",
                        "issuing_authority",
                        "citizenship_number",
                      ],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",
                        },
                      },

                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["b30feb72-988d-4bca-8b1a-f41f7cf52462"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                  id_expiry_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (A.D)",
                  },
                  id_expiry_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "f9254205-8b66-44ca-9e75-1145a1130c78",
                          readOnly: true,
                        },
                        citizenship_number: {
                          type: "string",
                          title: "Citizenship Number",
                        },
                      },
                      required: [
                        "issued_district",
                        "issuing_authority",
                        "citizenship_number",
                      ],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",
                        },
                      },
                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                  "id_expiry_date_ad",
                  "id_expiry_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["d33cd0aa-896f-40d3-9c61-cacd8ff84f3f"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },

                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "a4e3fa6d-133d-40da-8996-444207b7f2a2",
                          readOnly: true,
                        },
                        citizenship_number: {
                          type: "string",
                          title: "Citizenship Number",
                        },
                      },
                      required: [
                        "issued_district",
                        "issuing_authority",
                        "citizenship_number",
                      ],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",
                        },
                      },
                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: [
                      "4dc4c231-ca03-4148-9167-04e4404cc970",
                      "4fcd4a69-59f3-4de2-986f-c56e07d223cd",
                    ],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                  id_expiry_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (A.D)",
                  },
                  id_expiry_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: [
                            "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                            "636a6628-2b78-4e21-97a6-b276b2f9efb3",
                          ],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                        },
                      },
                      dependencies: {
                        if: {
                          properties: {
                            issue_country: {
                              enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                            },
                          },
                        },
                        then: {
                          properties: {
                            citizenship_number: {
                              type: "string",
                              title: "Citizenship Number",
                            },
                          },
                          required: ["citizenship_number"],
                        },
                      },

                      required: ["issued_district", "issuing_authority"],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "85bdeca6-4cb1-435e-a81c-e65a04a910f4",
                        },
                        visa_issued_date_ad: {
                          type: "string",
                          format: "date",
                          title: "Visa Issued Date (A.D)",
                        },
                        visa_expiry_date_ad: {
                          type: "string",
                          format: "date",
                          title: "Visa Expiry Date (A.D)",
                        },
                      },
                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                  "id_expiry_date_ad",
                  "id_expiry_date_bs",
                ],
              },

              {
                properties: {
                  id_type_id: {
                    enum: [
                      "28dfb4b6-3315-4965-b8d6-6e2db2d732ea",
                      "b245253e-fcea-4609-950d-0c8a9b5d07d9",
                    ],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  id_issued_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        issuing_authority: {
                          type: "string",
                          title: "Issuing Authority",

                          default: "f9254205-8b66-44ca-9e75-1145a1130c78",
                        },
                        citizenship_number: {
                          type: "string",
                          title: "Citizenship Number",
                        },
                      },
                      required: [
                        "issued_district",
                        "issuing_authority",
                        "citizenship_number",
                      ],
                    },
                    else: {
                      properties: {
                        issued_district_text: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                      },
                      required: ["issued_district_text"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["464bac44-cb47-4a20-b0ea-334f26551f8a"],
                  },
                  national_id_number: {
                    type: "string",
                    title: "National ID Number",
                  },
                  citizenship_number: {
                    type: "string",
                    title: "Citizenship Number",
                  },

                  comment: {
                    type: "string",
                    title: "Comment",
                  },
                },

                required: ["national_id_number", "comment"],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["3379d6f6-cc1b-4cdc-ae2a-440292b95c50"],
                  },
                  nrn_card_number: {
                    type: "string",
                    title: "NRN Card No.",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",
                  },

                  issuing_authority: {
                    type: "string",
                    title: "Issuing Authority",
                  },
                  id_issued_date_ad: {
                    type: "string",
                    format: "date",

                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                  id_expiry_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (A.D)",
                  },
                  id_expiry_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                        citizenship_number: {
                          type: "string",
                          title: "Citizenship Number",
                        },
                      },
                      required: ["issued_district", "citizenship_number"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",

                  "issuing_authority",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                  "id_expiry_date_ad",
                  "id_expiry_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["bf99155d-a772-4b30-b646-b0806179499f"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  issuing_authority: {
                    type: "string",
                    title: "Issuing Authority",
                  },
                  id_issued_date_ad: {
                    type: "string",
                    format: "date",

                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                  id_expiry_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (A.D)",
                  },
                  id_expiry_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (B.S)",
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                      },
                      required: ["issued_district"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",

                  "issuing_authority",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                  "id_expiry_date_ad",
                  "id_expiry_date_bs",
                ],
              },
              {
                properties: {
                  id_type_id: {
                    enum: ["011ef0e7-27a0-4337-8a8e-ef0492984c5a"],
                  },
                  identification_number: {
                    type: "string",
                    title: "Identity Number",
                  },
                  issue_country: {
                    type: "string",
                    title: "Country Of Issue",

                    default: "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                  },

                  issuing_authority: {
                    type: "string",
                    title: "Issuing Authority",

                    default: "54a9fcd6-777c-4b4d-9d52-775eed06f003",
                  },
                  id_issued_date_ad: {
                    type: "string",
                    format: "date",

                    title: "Issued Date (A.D)",
                  },
                  id_issued_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Issued Date (B.S)",
                  },
                  id_expiry_date_ad: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (A.D)",

                    readOnly: true,
                  },
                  id_expiry_date_bs: {
                    type: "string",
                    format: "date",
                    title: "Expiry Date (B.S)",

                    readOnly: true,
                  },
                },
                dependencies: {
                  issue_country: {
                    if: {
                      properties: {
                        issue_country: {
                          enum: ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"],
                        },
                      },
                    },
                    then: {
                      properties: {
                        issued_district: {
                          type: "string",
                          title: "Place Of Issue",
                        },
                      },
                      required: ["issued_district"],
                    },
                  },
                },
                required: [
                  "identification_number",
                  "issue_country",
                  "issuing_authority",
                  "id_issued_date_ad",
                  "id_issued_date_bs",
                  "id_expiry_date_ad",
                  "id_expiry_date_bs",
                ],
              },
            ],
          },
        },
      },
    },
    national_id_number: {
      type: "string",
      title: "National ID Number",
    },
    national_id_issue_date_ad: {
      type: "string",
      format: "date",
      title: "Issue Date(A.D)",
    },
    national_id_issue_date_bs: {
      type: "string",
      format: "date",
      title: "Issue Date(B.S)",
    },
    national_id_issue_place: {
      type: "string",
      title: "Issue Place",
    },
    national_id_issuing_authority: {
      type: "string",
      title: "Issuing Authority",
    },
    citizenship_number: {
      type: "string",
      title: "Citizenship Number",
    },
    pan_number: {
      type: "string",
      title: "Pan Number",

      pattern: "^(\\d{9})?$",
    },
    pan_issue_date_ad: {
      type: "string",
      format: "date",
      title: "PAN Issue Date(A.D)",
    },
    pan_issue_date_bs: {
      type: "string",
      format: "date",
      title: "PAN Issue Date(B.S)",
    },
    pan_issue_place: {
      type: "string",
      title: "PAN Issue Place",
    },
    pan_issuing_authority: {
      type: "string",
      title: "Issuing Authority",

      default: "cb50153b-804e-4d3a-8b51-6ad95e8619bb",
      readOnly: true,
    },
    citizenship_number_pan: {
      type: "string",
      title: "Citizenship Number",
    },
    occupation_type: {
      type: "string",
      title: "Occupation Type",

      readOnly: true,
    },
    source_of_income: {
      type: "string",
      title: "Source of Income",

      readOnly: true,
    },
    declared_anticipated_annual_transaction: {
      type: "string",
      title: "Anticipated Annual Transaction",

      pattern: "^[0-9]*$",

      readOnly: true,
    },
    expected_anticipated_annual_transaction: {
      type: "string",
      title: "Anticipated Annual Transaction",

      pattern: "^[0-9]*$",

      readOnly: true,
    },
    number_of_transaction: {
      type: "string",
      title: "Number of Transaction",

      pattern: "^[0-9]*$",

      readOnly: true,
    },
    transaction_justification: {
      type: "string",
      title:
        "Does the transaction amount seem justified with customer profile ?",

      enum: ["Yes", "No"],

      readOnly: true,
    },
    transaction_fund_details: {
      type: "string",
      title: "Is the source of funds clear and identifiable ?",

      enum: ["Yes", "No"],

      readOnly: true,
    },
    pep: {
      type: "string",
      title: "Politically Exposed Person (PEP) ?",

      enum: ["Yes", "No"],
      readOnly: true,
    },

    pep_declaration: {
      type: "string",
      title: "Customer self declares as a PEP is correct ?",

      enum: ["Yes", "No"],

      readOnly: true,
    },
    family_pep_declaration: {
      type: "string",
      title: "Customer declares family member as PEP or as associate PEP ?",

      enum: ["Yes", "No"],

      readOnly: true,
    },
    adverse_media: {
      type: "string",
      title: "Adverse Media",

      enum: ["Yes", "No"],

      readOnly: true,
    },

    beneficial_owner: {
      type: "string",
      title: "Any Beneficial Owner?",
      enum: ["Yes", "No"],

      default: "Yes",
    },

    entitled_with_fund: {
      type: "string",
      title: " Is Ultimately accountholder is entitled to the funds ?",

      enum: ["Yes", "No"],

      readOnly: true,
    },

    crime_in_past: {
      type: "string",
      title: "Declaration of Convicted for any crime in past",

      enum: ["Yes", "No"],
    },

    residential_permit: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Do You Hold Residential Permit of foreign country?",
    },

    is_us_person: {
      type: "string",
      title: "FATCA Declaration",

      enum: ["US Resident", "US Citizen", "US Green Card Holder", "None"],
    },

    ac_with_other_bank: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Account with other bank or financial institutions (BFIs)",
    },
    has_nominee: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Has Nominee",
    },

    collect: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Collect",
    },
    email_template: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Email",
    },

    need_check_book: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Cheque Book Leaves",
    },

    debit_card: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Debit Card",
    },
    need_locker: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Locker",
    },
    customer_type_id: {
      type: "string",
      title: "Customer Type",

      readOnly: true,
    },
    constitution_code_id: {
      type: "string",
      title: "Constitution Code",

      readOnly: true,
    },
    customer_status: {
      type: "string",
      title: "Customer Status",

      enum: ["Good", "Bad", "Doubtful"],
      readOnly: true,
    },
    customer_account_status: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Has the customer maintained an account with us ?",

      readOnly: true,
    },
    loan_status: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Has the customer taken any loan with us in the past ?",

      readOnly: true,
    },
    is_blacklisted: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Has the customer being blacklisted by us ?",

      readOnly: true,
    },
    customer_introduce_by: {
      type: "string",
      title: "Introducer Name",

      readOnly: true,
      enum: [
        "Bank Staff",
        "Other Account Holder",
        "Walk-in Customer",
        "Local Government Bodies",
      ],
    },

    customer_business_involvement: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Is the customer involved in any other high risk business ?",

      readOnly: true,
    },

    is_customer_helpful: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Is the customer being helpful ?",

      readOnly: true,
    },
    met_in_person: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Has the customer been met in-person (face-to-face) ?",

      readOnly: true,
    },
    has_document: {
      type: "string",
      enum: ["Yes", "No"],
      title: "Have all necessary documents been obtained ?",

      readOnly: true,
    },
    approval_status: {
      type: "string",
      enum: ["Approve", "Reject", "Revert"],

      title: "Approval Status",
    },
    approval_remarks: {
      type: "string",

      title: "Approval Remarks",
    },
    is_block_list: {
      type: "boolean",
      default: false,
    },
    is_existing_cif: {
      type: "boolean",
      default: false,
    },

    scheme_check: {
      type: "boolean",
      default: false,
    },

    is_cib_list: {
      type: "boolean",
      default: false,
    },

    is_sanction: {
      type: "boolean",
      default: false,
    },
  },

  allOf: [
    {
      if: {
        properties: {
          nationality: {
            enum: ["9c0c15a4-c05c-4355-a880-4c9798543152"],
          },
        },
      },
      then: {
        properties: {},
        required: [
          "national_id_number",
          "national_id_issue_date_ad",
          "national_id_issue_date_bs",
          "national_id_issue_place",
          "national_id_issuing_authority",
          "citizenship_number",
        ],
      },
      else: {
        properties: {},
        required: [],
      },
    },
    {
      if: {
        properties: {
          nationality: {
            enum: ["47ea7bb9-7fa8-4441-a1fc-0f8b79812268"],
          },
        },
      },
      then: {
        properties: {
          is_us_person: {
            type: "string",
            title: "FATCA Declaration",

            enum: ["US Resident", "US Citizen"],
          },
        },
      },
    },
  ],
  dependencies: {
    has_nominee: {
      if: {
        properties: {
          has_nominee: {
            enum: ["Yes"],
          },
        },
      },
      then: {
        properties: {
          nominee_full_name: {
            type: "string",
            title: "Nominee Full Name",
          },
          relation_to_nominee: {
            type: "string",
            title: "Relation to Nominee",

            enum: ["Father", "Mother", "Brother", "Sister"],
          },
          nominee_father_name: {
            type: "string",
            title: "Nominee Father Name",
          },
          nominee_grandfather_name: {
            type: "string",
            title: "Nominee Grandfather Name",
          },
          nominee_contact_number: {
            type: "string",
            title: "Nominee Contact No.",

            pattern: "^(\\d{7,12})?$",
          },
        },
        required: [
          "nominee_full_name",
          "relation_to_nominee",
          "nominee_father_name",
          "nominee_grandfather_name",
        ],
      },
      else: {},
    },

    nationality: {
      if: {
        properties: {
          nationality: {
            enum: ["9c0c15a4-c05c-4355-a880-4c9798543152"],
          },
        },
      },
      then: {
        properties: {},
        required: [
          "national_id_number",
          "national_id_issue_date_ad",
          "national_id_issue_date_bs",
          "national_id_issue_place",
          "national_id_issuing_authority",
          "citizenship_number",
        ],
      },
      else: {
        properties: {},
        required: [],
      },
    },
    pan_number: [
      "pan_issue_date_ad",
      "pan_issue_date_bs",
      "pan_issue_place",
      "pan_issuing_authority",
      "citizenship_number_pan",
    ],
    literacy: {
      if: {
        properties: {
          literacy: {
            enum: ["00a42175-421d-4c5b-a3d6-68434f08b198"],
          },
        },
      },
      then: {
        properties: {
          educational_qualification: {
            readOnly: false,
          },
        },
      },
      else: {
        properties: {
          educational_qualification: {
            readOnly: true,
          },
        },
      },
    },
    customer_introduce_by: {
      oneOf: [
        {
          properties: {
            customer_introduce_by: {
              enum: ["Bank Staff"],
            },
            employee_id: {
              type: "string",
              title: "Employee ID",
            },
          },
          required: ["employee_id"],
        },
        {
          properties: {
            customer_introduce_by: {
              enum: ["Other Account Holder"],
            },
            introducer_account_number: {
              type: "string",
              title: "Introducer Account Number",

              pattern: "^[0-9]{14}$",
            },
          },
          required: ["introducer_account_number"],
        },
        {
          properties: {
            customer_introduce_by: {
              enum: ["Walk-in Customer"],
            },
            customer_name: {
              type: "string",
              title: "Customer Name",
            },
          },
          required: ["customer_name"],
        },
      ],
    },
    educational_qualification: {
      properties: {
        educational_university: {
          type: "string",
          title: "Institute of University",
        },
      },
      required: ["educational_university"],
    },
    contact_type: {
      oneOf: [
        {
          properties: {
            contact_type: {
              enum: ["Phone Number"],
            },
            phone_country_code: {
              type: "string",
              title: "Code",

              default: "16821317-efa5-469b-9858-e283ce2052ec",
              readOnly: true,
            },
            phone_number: {
              type: "number",
              title: "Phone Number",

              pattern: "^(\\d{7,12})?$",

              readOnly: true,
            },
          },
          required: ["phone_country_code", "phone_number"],
        },
        {
          properties: {
            contact_type: {
              enum: ["Mobile Number"],
            },
            mobile_country_code: {
              type: "string",
              title: "Code",

              default: "16821317-efa5-469b-9858-e283ce2052ec",
              readOnly: true,
            },
            mobile_number: {
              type: "number",
              title: "Mobile Number",

              pattern: "^(\\d{7,12})?$",

              readOnly: true,
            },
            need_mobile_banking: {
              type: "string",
              enum: ["Yes", "No"],
              title: "Mobile Banking",
            },
          },
          required: ["mobile_country_code", "mobile_number"],
        },
        {
          properties: {
            contact_type: {
              enum: ["No Contact Detail"],
            },
          },
        },
        {
          properties: {
            contact_type: {
              enum: ["Both Contact Detail"],
            },
            phone_country_code: {
              type: "string",
              title: "Code",

              default: "16821317-efa5-469b-9858-e283ce2052ec",
              readOnly: true,
            },
            phone_number: {
              type: "number",
              title: "Phone Number",

              pattern: "^(\\d{7,12})?$",

              readOnly: true,
            },
            mobile_country_code: {
              type: "string",
              title: "Code",

              default: "16821317-efa5-469b-9858-e283ce2052ec",
              readOnly: true,
            },
            mobile_number: {
              type: "number",
              title: "Mobile Number",

              pattern: "^(\\d{7,12})?$",

              readOnly: true,
            },
            need_mobile_banking: {
              type: "string",
              enum: ["Yes", "No"],
              title: "Mobile Banking",
            },
          },
          required: [
            "phone_country_code",
            "phone_number",
            "mobile_country_code",
            "mobile_number",
          ],
        },
      ],
    },
    occupation_type: {
      if: {
        properties: {
          occupation_type: {
            enum: [
              "4373600c-8c46-4fe5-ad12-13cb189cad87",
              "1703f985-1c7a-48cb-a784-446c422e4070",
              "daaf2c58-ebc4-40a2-8edb-e900d9ee0a3b",
            ],
          },
        },
      },
      then: {
        properties: {
          occupation_detail: {
            type: "array",
            title: "Occupation",

            minItems: 1,
            items: {
              type: "object",
              properties: {
                name_of_organization: {
                  type: "string",
                  title: "Name of Organization",
                },
                organization_address: {
                  type: "string",
                  title: "Address",
                },
                organization_contact_number: {
                  type: "number",
                  title: "Contact No.",
                  pattern: "^(\\d{7,12})?$",
                },
                designation: {
                  type: "string",
                  title: "Designation",
                },
                business_type: {
                  type: "string",
                  title: "Business Type",
                },
              },
              required: [
                "name_of_organization",
                "organization_address",
                "organization_contact_number",
                "designation",
                "business_type",
              ],
            },
          },
        },
      },
      else: {
        properties: {},
      },
    },
    account_info: {
      if: {
        properties: {
          account_info: {
            enum: ["d78e6210-0297-4018-8e38-f0d73aa95934"],
          },
        },
      },
      then: {
        properties: {
          has_related_party: {
            type: "string",
            title: "Has a Power of Attorney / Mandatee been assigned ?",
            enum: ["Yes", "No"],

            readOnly: true,
          },
        },
        dependencies: {
          has_related_party: {
            if: {
              properties: {
                has_related_party: {
                  enum: ["Yes"],
                },
              },
            },
            then: {
              properties: {
                related_party: {
                  type: "array",

                  readOnly: true,

                  minItems: 0,
                  title: "Related Party",
                  items: {
                    type: "object",
                    properties: {
                      designation: {
                        type: "string",
                        title: "Designation",

                        enum: ["Power of Attorney", "Mandatee"],
                      },
                    },
                    dependencies: {
                      designation: {
                        if: {
                          properties: {
                            designation: {
                              enum: ["Power of Attorney"],
                            },
                          },
                        },
                        then: {
                          properties: {
                            first_name: {
                              type: "string",
                              title: "First Name",

                              pattern: "^[a-zA-Z.\\s]*$",
                            },
                            middle_name: {
                              type: "string",
                              title: "Middle Name",

                              pattern: "^[a-zA-Z.\\s]*$",
                              
                            },
                            last_name: {
                              type: "string",
                              title: "Last Name",

                              pattern: "^[a-zA-Z./\\s]*$",
                              
                            },
                            family_account_holder: {
                              type: "string",
                              title: "Is s/he family member of account holder?",
                              enum: ["Yes", "No"],
                            },
                            relation_with_account_holder: {
                              type: "string",
                              title: "Relationship with the accoutholder ?",
                            },
                          },
                        },
                        else: {
                          properties: {
                            related_party_detail: {
                              type: "array",
                              minItems: 1,
                             

                              items: {
                                type: "object",
                                properties: {
                                  first_name: {
                                    type: "string",
                                    title: "First Name",

                                    pattern: "^[a-zA-Z.\\s]*$",
                                    
                                  },
                                  middle_name: {
                                    type: "string",
                                    title: "Middle Name",

                                    pattern: "^[a-zA-Z.\\s]*$",
                                   
                                  },
                                  last_name: {
                                    type: "string",
                                    title: "Last Name",

                                    pattern: "^[a-zA-Z./\\s]*$",
                                   
                                  },
                                  family_account_holder: {
                                    type: "string",
                                    title:
                                      "Is s/he a family member of the account holder ?",
                                    enum: ["Yes", "No"],
                                  },
                                  relation_with_account_holder: {
                                    type: "string",
                                    title:
                                      "Relationship with the accoutholder ?",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    has_cif: {
      if: {
        properties: {
          has_cif: {
            const: true,
          },
        },
      },
      then: {
        properties: {
          cif_number: {
            type: "string",
            title: "CIF Number",

            readOnly: true,
          },
        },
        required: ["cif_number"],
      },
    },
  },
};
