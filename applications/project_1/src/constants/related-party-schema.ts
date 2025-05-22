export const relatedpartySchema = {
  "type": "object",
  "className": "fs-1",
  "singleForm": true,
  "submissionHidden": false,
  "hasStep": true,
  "form_title": "related_party",
  "properties": {
    "has_related_party": {
      "type": "string",
      "title": "Has related parties ?",
      "enum": ["Yes", "No"]
    },
    "account_info": {
      "type": "string",
      "group": "Account Information",
      "hideTitle": true,
      "width": "full"
    }
  },
  "required": ["has_related_party"],
  "dependencies": {
    "has_related_party": {
      "if": {
        "properties": {
          "has_related_party": {
            "enum": ["Yes"]
          }
        }
      },
      "then": {
        "properties": {
          "related_party": {
            "type": "array",
            "minItems": 1,
            "maxItems": 2,
            "group": "Related Party",
            "hideTitle": true,
            "width": "full",
            "buttonWidth": "full",
            "items": {
              "type": "object",
              "properties": {
                "designation": {
                  "type": "string",
                  "title": "Designation",
                  "group": "Information",
                  "hideTitle": true,
                  "enum": ["Power of Attorney", "Mandatee"],
                  "default": "Mandatee"
                }
              },
              "dependencies": {
                "designation": {
                  "if": {
                    "properties": {
                      "designation": {
                        "enum": ["Power of Attorney"]
                      }
                    }
                  },
                  "then": {
                    "required": [
                      "first_name",
                      "last_name",
                      "father_name",
                      "date_of_birth_ad",
                      "date_of_birth_bs",
                      "dedup_identification",
                      "dedup_id_number",
                      "has_document",
                      "relation_with_account_holder",
                      "salutation",
                      "gender",
                      "marital_status",
                      "email",
                      "nationality",
                      "contact_type",
                      "occupation_type",
                      "source_of_income",
                      "customer_type_id",
                      "constitution_code_id",
                      "customer_status",
                      "pep",
                      "pep_declaration",
                      "family_pep_declaration",
                      "adverse_media",
                      "customer_account_status",
                      "loan_status",
                      "is_blacklisted",
                      "customer_business_involvement"
                    ],

                    "properties": {
                      "pep": {
                        "type": "string",
                        "title": "Politically Exposed Person (PEP) ?",
                        "group": "Declaration",
                        "enum": ["Yes", "No"]
                      },
                      "pep_declaration": {
                        "type": "string",
                        "title": "Customer self declares as PEP, is it correct?",
                        "group": "Declaration",
                        "enum": ["Yes", "No"],
                        "width": 8
                      },
                      "family_pep_declaration": {
                        "type": "string",
                        "title": "Customer declares family member as PEP or as associate PEP ?",
                        "group": "Declaration",
                        "enum": ["Yes", "No"],
                        "width": 10
                      },
                      "adverse_media": {
                        "type": "string",
                        "title": "Adverse Media",
                        "group": "Declaration",
                        "enum": ["Yes", "No"]
                      },

                      "customer_account_status": {
                        "type": "string",
                        "title": " Has the customer maintained an account with us ?",
                        "group": "statusOfClient",
                        "enum": ["Yes", "No"],
                        "width": 8
                      },
                      "loan_status": {
                        "type": "string",
                        "title": "Has the customer taken any loan with us in the past ?",
                        "group": "statusOfClient",
                        "enum": ["Yes", "No"],
                        "width": 8
                      },
                      "is_blacklisted": {
                        "type": "string",
                        "title": "Has the customer being blacklisted by us ?",
                        "group": "statusOfClient",
                        "enum": ["Yes", "No"],
                        "width": 8
                      },
                      "customer_business_involvement": {
                        "type": "string",
                        "title": "Is the customer involved in any other high risk business ?",
                        "group": "statusOfClient",
                        "enum": ["Yes", "No"],
                        "width": 8
                      },
                      "customer_type_id": {
                        "type": "string",
                        "title": "Customer Type",
                        "group": "Account Information"
                      },
                      "constitution_code_id": {
                        "type": "string",
                        "title": "Constitution Code",
                        "group": "Account Information"
                      },
                      "customer_status": {
                        "type": "string",
                        "title": "Customer Status",
                        "group": "Account Information",
                        "enum": ["Good", "Bad", "Doubtful"],
                        "default": "Good"
                      },

                      "relation_with_account_holder": {
                        "type": "string",
                        "title": "Relationship with the accoutholder ?",
                        "group": "personalInformation"
                      },
                      "calculate_risk": {
                        "type": "string",
                        "title": "Calculate Risk",
                        "group": "Risk"
                      },
                      "risk_level": {
                        "type": "string",
                        "group": "Risk",
                        "title": "Risk Level",
                        "readOnly": true
                      },
                      "risk_score": {
                        "type": "number",
                        "title": "Risk Score",
                        "group": "Risk",
                        "readOnly": true
                      },
                      "first_name": {
                        "type": "string",
                        "title": "First Name",
                        "group": "Duplication Check Module",

                        "pattern": "^[a-zA-Z]*$",
                        "errorMessage": {
                          "pattern": "Alphabets only"
                        }
                      },
                      "middle_name": {
                        "type": ["string", "null"],
                        "title": "Middle Name",
                        "group": "Duplication Check Module",

                        "pattern": "^[a-zA-Z]*$",
                        "errorMessage": {
                          "pattern": "Alphabets only"
                        }
                      },
                      "last_name": {
                        "type": "string",
                        "title": "Last Name",
                        "group": "Duplication Check Module",
                        "connect": "last_name_not_available",
                        "pattern": "^[a-zA-Z\\s/.]*$",
                        "errorMessage": {
                          "pattern": "Alphabets and spaces only"
                        }
                      },

                      "last_name_not_available": {
                        "type": "boolean",
                        "title": "If last name not available?",
                        "group": "Duplication Check Module"
                      },
                      "father_name": {
                        "type": "string",
                        "title": "Father Name",
                        "group": "Duplication Check Module",

                        "pattern": "^[a-zA-Z\\s]*$",
                        "errorMessage": {
                          "pattern": "Alphabets and spaces only"
                        }
                      },
                      "dedup_identification": {
                        "type": "string",
                        "title": "Identification",
                        "group": "Duplication Check Module",
                        "default": "2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"
                      },
                      "dedup_id_number": {
                        "type": "string",
                        "title": "Identification Number",
                        "group": "Duplication Check Module"
                      },
                      "date_of_birth_ad": {
                        "type": "string",
                        "format": "date",
                        "group": "Duplication Check Module",

                        "title": "Date of Birth (A.D.)"
                      },
                      "date_of_birth_bs": {
                        "type": "string",
                        "format": "date",
                        "group": "Duplication Check Module",
                        "title": "Date of Birth (B.S.)"
                      },

                      "dedup_check": {
                        "type": "string",
                        "title": "Dedup Check",
                        "group": "Duplication Check Module",
                        "width": "full"
                      },
                      "dedup_module_data": {
                        "type": "string",
                        "width": "full",
                        "group": "Duplication Check Module",
                        "additionalProperties": true,
                        "columns": [
                          { "key": "full_name", "label": "Name" },
                          { "key": "cif_number", "label": "Cif Number" },
                          {
                            "key": "grand_father_name",
                            "label": "Grand Father Name"
                          },
                          { "key": "father_name", "label": "Father Name" },
                          { "key": "mother_name", "label": "Mother Name" },
                          {
                            "key": "date_of_birth_ad",
                            "label": "Date of Birth"
                          },
                          {
                            "key": "identification_number",
                            "label": "Citizenship Number"
                          }
                        ],
                        "actions": [
                          {
                            "label": "Match",
                            "icon": "match",
                            "tooltip": "Matched Detail",
                            "actionKey": "match"
                          }
                        ]
                      },
                      "has_cif": {
                        "type": "boolean",
                        "title": "Has CIF Number?",
                        "group": "Primary Account Information",
                        "hideTitle": true,

                        "width": "full"
                      },

                      "has_document": {
                        "type": "string",
                        "enum": ["Yes", "No"],
                        "title": "Has all document been received?",
                        "group": "Account Information"
                      },

                      "salutation": {
                        "type": "string",
                        "title": "Salutation",
                        "width": "full",
                        "group": "personalInformation"
                      },

                      "gender": {
                        "type": "string",
                        "title": "Gender",
                        "group": "personalInformation"
                      },
                      "marital_status": {
                        "type": "string",
                        "title": "Marital Status",
                        "group": "personalInformation"
                      },
                      "nationality": {
                        "type": "string",
                        "title": "Nationality",
                        "group": "Account Information",
                        "default": "9c0c15a4-c05c-4355-a880-4c9798543152"
                      },
                      "contact_type": {
                        "type": "string",
                        "title": "Contact Number Type",
                        "group": "Contact Detail",
                        "enum": [
                          "No Contact Detail",
                          "Mobile Number",
                          "Phone Number",
                          "Both Contact Detail"
                        ]
                      },

                      "email_not_available": {
                        "type": "boolean",
                        "title": "If email not available?",
                        "group": "personalInformation"
                      },
                      "email": {
                        "type": "string",
                        "title": "Email",
                        "group": "personalInformation",
                        "pattern": "^(N/A|\\.|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$",
                        "errorMessage": {
                          "pattern": "Invalid Email Address"
                        }
                      },

                      "family_information": {
                        "type": "array",
                        "title": "Family Information",
                        "hideTitle": true,
                        "minItems": 3,
                        "maxItems": 3,
                        "default": [
                          {
                            "family_member_relation": "66a40508-67f6-4303-9f88-8537ff195007"
                          },
                          {
                            "family_member_relation": "fa7a30e3-4418-448c-9d4d-bbe77dcd6282"
                          },
                          {
                            "family_member_relation": "6c165fe8-9d19-481f-b6d3-326eabfac249"
                          }
                        ],
                        "items": {
                          "type": "object",
                          "properties": {
                            "family_member_relation": {
                              "type": "string",
                              "title": "Relationship"
                            },
                            "family_member_full_name": {
                              "type": "string",
                              "title": "Full Name"
                            },
                            "is_family_name_not_available": {
                              "type": "boolean",
                              "title": "Member not available?"
                            }
                          },
                          "dependencies": {
                            "is_family_name_not_available": {
                              "oneOf": [
                                {
                                  "properties": {
                                    "is_family_name_not_available": {
                                      "const": true
                                    },
                                    "family_member_full_name": {
                                      "readOnly": true
                                    }
                                  }
                                },
                                {
                                  "properties": {
                                    "is_family_name_not_available": {
                                      "const": false
                                    }
                                  },
                                  "required": ["family_member_full_name"]
                                }
                              ]
                            }
                          }
                        },
                        "group": "familyInformation"
                      },

                      "occupation_type": {
                        "type": "string",
                        "title": "Occupation Type",
                        "group": "Occupation/Profession/Business Details"
                      },
                      "source_of_income": {
                        "type": "string",
                        "title": "Source of Income",
                        "group": "Occupation/Profession/Business Details"
                      },

                      "personal_info_screening": {
                        "type": "string",
                        "width": "full",
                        "title": "Screening",
                        "group": ""
                      },

                      "personal_screening_data": {
                        "type": "string",
                        "width": "full",
                        "group": "",
                        "additionalProperties": true,
                        "columns": [
                          { "key": "name", "label": "Name" },
                          { "key": "father_name", "label": "Father Name" },
                          { "key": "dob", "label": "Date of Birth" },
                          {
                            "key": "citizenship_numbers",
                            "label": "Citizenship Number"
                          },
                          {
                            "key": "match_percentage",
                            "label": "Matching Percentage"
                          }
                        ],
                        "actions": [
                          {
                            "label": "View",
                            "icon": "view",
                            "tooltip": "View Detail",
                            "actionKey": "view"
                          }
                        ]
                      },

                      "current_country": {
                        "type": "string",
                        "title": "Current Country",
                        "group": "Current",
                        "hideTitle": true,
                        "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                      }
                    },

                    "dependencies": {
                      "occupation_type": {
                        "if": {
                          "properties": {
                            "occupation_type": {
                              "enum": [
                                "4a3fa6bb-7580-4a7d-8479-0b44f31f58a6",
                                "9491dcf6-88a4-496c-82ee-0389a71fd1ec",
                                "cddfc23d-86b6-44cf-b640-25155cd3e52d",
                                "8bc2b5f3-bb2b-4742-a932-79462f809e68",
                                "d3e087fa-5104-468b-80b7-5a6d6fe431d4"
                              ]
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "occupation_detail": {
                              "type": "array",
                              "title": "Occupation",
                              "group": "Occupation/Profession/Business Details",
                              "minItems": 1,
                              "items": {
                                "type": "object",
                                "properties": {
                                  "name_of_organization": {
                                    "type": "string",
                                    "title": "Employer Name"
                                  },
                                  "organization_address": {
                                    "type": "string",
                                    "title": "Address"
                                  },
                                  "organization_contact_number": {
                                    "type": "number",
                                    "title": "Contact No.",
                                    "pattern": "^(\\d{7,12})?$",
                                    "errorMessage": {
                                      "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                    }
                                  },
                                  "designation": {
                                    "type": "string",
                                    "title": "Designation"
                                  },
                                  "business_type": {
                                    "type": "string",
                                    "title": "Business Type"
                                  }
                                },
                                "required": [
                                  "name_of_organization",
                                  "organization_address",
                                  "organization_contact_number",
                                  "designation",
                                  "business_type"
                                ]
                              }
                            }
                          }
                        },
                        "else": {
                          "properties": {}
                        }
                      },
                      "pep": {
                        "if": {
                          "properties": {
                            "pep": {
                              "enum": ["Yes"]
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "pep_category": {
                              "type": "string",
                              "enum": [
                                "Existing PEPs",
                                "Former PEPs",
                                "High-ranking officials from neighbouring or nearby countries",
                                "Other foreign PEPs",
                                "International PEPs"
                              ],
                              "title": "Pep Category",
                              "group": "Declaration"
                            }
                          },
                          "required": ["pep_category"]
                        }
                      },
                      "adverse_media": {
                        "if": {
                          "properties": {
                            "adverse_media": {
                              "enum": ["Yes"]
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "adverse_category": {
                              "type": "string",
                              "enum": [
                                "Money Laundering",
                                "Terrorist Financing",
                                "Financial Fraud",
                                "Organized Crime"
                              ],
                              "title": "Category of Adverse",
                              "group": "Declaration"
                            }
                          },
                          "required": ["adverse_category"]
                        }
                      },

                      "customer_account_status": {
                        "if": {
                          "properties": {
                            "customer_account_status": {
                              "enum": ["Yes"]
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "existing_risk_rating": {
                              "type": "string",
                              "title": "Existing Risk Rating",
                              "group": "statusOfClient",
                              "width": 8
                            }
                          },
                          "required": ["existing_risk_rating"]
                        }
                      },
                      "current_country": {
                        "oneOf": [
                          {
                            "properties": {
                              "current_country": {
                                "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                              },
                              "current_province": {
                                "type": "string",
                                "title": "Current Province",
                                "masterDataKey": "provinces",
                                "group": "Current",
                                "hideTitle": true
                              },
                              "current_district": {
                                "type": "string",
                                "title": "Current District",
                                "group": "Current",
                                "hideTitle": true,
                                "masterDataKey": "districts"
                              },
                              "current_municipality": {
                                "type": "string",
                                "title": "Current Municipality",
                                "group": "Current",
                                "hideTitle": true,
                                "masterDataKey": "local_bodies"
                              },
                              "current_ward_number": {
                                "type": "string",
                                "title": "Ward No",
                                "pattern": "^[0-9]{1,2}$",
                                "group": "Current",
                                "hideTitle": true,
                                "errorMessage": {
                                  "pattern": "Allowed 2 numbers only"
                                }
                              },
                              "current_street_name": {
                                "type": "string",
                                "title": "Tole/Street",
                                "group": "Current",
                                "hideTitle": true,
                                "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                "errorMessage": {
                                  "pattern": "Only alphanumeric characters and spaces are allowed."
                                }
                              },
                              "current_town": {
                                "type": ["string", "null"],
                                "title": "Town",

                                "group": "Current",
                                "hideTitle": true,
                                "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                "errorMessage": {
                                  "pattern": "Only alphanumeric characters and spaces are allowed."
                                }
                              },
                              "current_house_number": {
                                "type": ["string", "null"],
                                "title": "House No",
                                "group": "Current",
                                "hideTitle": true,
                                "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                "errorMessage": {
                                  "pattern": "Only alphanumeric characters and spaces are allowed."
                                }
                              }
                            }
                          },
                          {
                            "properties": {
                              "current_country": {
                                "not": {
                                  "enum": [
                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                  ]
                                }
                              },
                              "current_outside_town": {
                                "type": "string",
                                "title": "Outside Town",
                                "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                "errorMessage": {
                                  "pattern": "Only alphanumeric characters and spaces are allowed."
                                },
                                "group": "Current",
                                "hideTitle": true
                              },
                              "current_outside_street_name": {
                                "type": "string",
                                "title": "Outside Tole/Street",

                                "group": "Current",
                                "hideTitle": true,
                                "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                "errorMessage": {
                                  "pattern": "Only alphanumeric characters and spaces are allowed."
                                }
                              }
                            }
                          }
                        ]
                      },
                      "contact_type": {
                        "oneOf": [
                          {
                            "properties": {
                              "contact_type": {
                                "enum": ["Phone Number"]
                              },
                              "phone_country_code": {
                                "type": "string",
                                "title": "Code",
                                "group": "Contact Detail",
                                "width": 4,
                                "default": "16821317-efa5-469b-9858-e283ce2052ec"
                              },
                              "phone_number": {
                                "type": "number",
                                "title": "Phone Number",
                                "group": "Contact Detail",
                                "pattern": "^(\\d{7,12})?$",
                                "width": 5,
                                "errorMessage": {
                                  "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                }
                              }
                            },
                            "required": ["phone_country_code", "phone_number"]
                          },
                          {
                            "properties": {
                              "contact_type": {
                                "enum": ["Mobile Number"]
                              },
                              "mobile_country_code": {
                                "type": "string",
                                "title": "Code",
                                "group": "Contact Detail",
                                "width": 4,
                                "default": "16821317-efa5-469b-9858-e283ce2052ec"
                              }
                            },
                            "dependencies": {
                              "mobile_country_code": {
                                "if": {
                                  "properties": {
                                    "mobile_country_code": {
                                      "enum": [
                                        "16821317-efa5-469b-9858-e283ce2052ec"
                                      ]
                                    }
                                  }
                                },
                                "then": {
                                  "properties": {
                                    "mobile_number": {
                                      "type": "number",
                                      "title": "Mobile Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{10})?$",
                                      "width": 5,
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 10 digits without parentheses or dashes."
                                      }
                                    }
                                  },
                                  "required": ["mobile_number"]
                                },
                                "else": {
                                  "properties": {
                                    "mobile_number": {
                                      "type": "number",
                                      "title": "Mobile Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{7,12})?$",
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                      }
                                    }
                                  },
                                  "required": ["mobile_number"]
                                }
                              }
                            },
                            "required": ["mobile_country_code"]
                          },
                          {
                            "properties": {
                              "contact_type": {
                                "enum": ["Both Contact Detail"]
                              },
                              "phone_country_code": {
                                "type": "string",
                                "title": "Code",
                                "group": "Contact Detail",
                                "width": 4,
                                "default": "16821317-efa5-469b-9858-e283ce2052ec"
                              },
                              "phone_number": {
                                "type": "number",
                                "title": "Phone Number",
                                "group": "Contact Detail",
                                "pattern": "^(\\d{7,12})?$",
                                "width": 5,
                                "errorMessage": {
                                  "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                }
                              },
                              "mobile_country_code": {
                                "type": "string",
                                "title": "Code",
                                "group": "Contact Detail",
                                "width": 4,
                                "default": "16821317-efa5-469b-9858-e283ce2052ec"
                              }
                            },
                            "required": [
                              "phone_country_code",
                              "phone_number",
                              "mobile_country_code"
                            ],
                            "dependencies": {
                              "mobile_country_code": {
                                "if": {
                                  "properties": {
                                    "mobile_country_code": {
                                      "enum": [
                                        "16821317-efa5-469b-9858-e283ce2052ec"
                                      ]
                                    }
                                  }
                                },
                                "then": {
                                  "properties": {
                                    "mobile_number": {
                                      "type": "number",
                                      "title": "Mobile Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{10})?$",
                                      "width": 5,
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 10 digits without parentheses or dashes."
                                      }
                                    }
                                  },
                                  "required": ["mobile_number"]
                                },
                                "else": {
                                  "properties": {
                                    "mobile_number": {
                                      "type": "number",
                                      "title": "Mobile Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{7,12})?$",
                                      "width": 5,
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                      }
                                    }
                                  },
                                  "required": ["mobile_number"]
                                }
                              }
                            }
                          },
                          {
                            "properties": {
                              "contact_type": {
                                "enum": ["No Contact Detail"]
                              }
                            }
                          }
                        ]
                      },

                      "last_name_not_available": {
                        "if": {
                          "properties": {
                            "last_name_not_available": {
                              "const": true
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "last_name": {
                              "readOnly": true
                            }
                          }
                        },
                        "else": {
                          "properties": {
                            "last_name": {
                              "readOnly": false
                            }
                          }
                        }
                      },

                      "has_cif": {
                        "if": {
                          "properties": {
                            "has_cif": {
                              "const": true
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "cif_number": {
                              "type": "string",
                              "title": "CIF Number",
                              "group": "Primary Account Information",
                              "hideTitle": true
                            },
                            "cif_enquiry": {
                              "type": "string",
                              "title": "Proceed",
                              "hideTitle": true,

                              "group": "Primary Account Information"
                            }
                          },
                          "required": ["cif_number"]
                        }
                      },
                      "nationality": {
                        "if": {
                          "properties": {
                            "nationality": {
                              "enum": ["9c0c15a4-c05c-4355-a880-4c9798543152"]
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "permanent_country": {
                              "type": "string",
                              "title": "Permanent Country",
                              "group": "Contact Detail",
                              "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                              "readOnly": true
                            },
                            "same_as_permanent": {
                              "type": "boolean",
                              "title": "Same As Permanent Address",
                              "group": "Contact Detail",
                              "width": "full",
                              "default": false
                            },
                            "dedup_identification": {
                              "readOnly": true
                            },
                            "id_type_details": {
                              "type": "array",
                              "title": "Identification Detail",
                              "group": "Identification Detail",
                              "minItems": 1,
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id_type_id": {
                                    "type": "string",
                                    "title": "Identification",
                                    "hideTitle": true,
                                    "group": "Identification Detail"
                                  }
                                },
                                "required": ["id_type_id"],
                                "dependencies": {
                                  "id_type_id": {
                                    "oneOf": [
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "ce66bc73-158b-42e5-b445-095c193d0137"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },

                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "b30feb72-988d-4bca-8b1a-f41f7cf52462"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "d33cd0aa-896f-40d3-9c61-cacd8ff84f3f"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },

                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "a4e3fa6d-133d-40da-8996-444207b7f2a2",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "4dc4c231-ca03-4148-9167-04e4404cc970",
                                              "4fcd4a69-59f3-4de2-986f-c56e07d223cd"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },

                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                                                    "636a6628-2b78-4e21-97a6-b276b2f9efb3"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138"
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "85bdeca6-4cb1-435e-a81c-e65a04a910f4"
                                                },
                                                "visa_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Visa Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "visa_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Visa Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },

                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "28dfb4b6-3315-4965-b8d6-6e2db2d732ea",
                                              "b245253e-fcea-4609-950d-0c8a9b5d07d9"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78"
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "464bac44-cb47-4a20-b0ea-334f26551f8a"
                                            ]
                                          },
                                          "national_id_number": {
                                            "type": "string",
                                            "title": "National ID Number",
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },

                                          "comment": {
                                            "type": "string",
                                            "title": "Comment",
                                            "text": "textarea",
                                            "width": "full",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },

                                        "required": [
                                          "national_id_number",
                                          "comment"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "3379d6f6-cc1b-4cdc-ae2a-440292b95c50"
                                            ]
                                          },
                                          "nrn_card_number": {
                                            "type": "string",
                                            "title": "NRN Card No.",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",

                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "bf99155d-a772-4b30-b646-b0806179499f"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",

                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "011ef0e7-27a0-4337-8a8e-ef0492984c5a"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "default": "54a9fcd6-777c-4b4d-9d52-775eed06f003"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "readOnly": true
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "readOnly": true
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          },
                          "dependencies": {
                            "permanent_country": {
                              "if": {
                                "properties": {
                                  "permanent_country": {
                                    "enum": [
                                      "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                    ]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "permanent_province": {
                                    "type": "string",
                                    "title": "Permanent Province",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_district": {
                                    "type": "string",
                                    "title": "Permanent District",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_municipality": {
                                    "type": "string",
                                    "title": "Permanent Municipility",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_ward_number": {
                                    "type": "string",
                                    "title": "Ward No",
                                    "group": "Contact Detail",
                                    "pattern": "^[0-9]{1,2}$",
                                    "errorMessage": {
                                      "pattern": "Allowed 2 number only"
                                    }
                                  },
                                  "permanent_street_name": {
                                    "type": "string",
                                    "title": "Tole/Street",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_town": {
                                    "type": "string",
                                    "title": "Town",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_house_number": {
                                    "type": "string",
                                    "title": "House No",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  }
                                },
                                "required": [
                                  "permanent_province",
                                  "permanent_district",
                                  "permanent_municipality",
                                  "permanent_ward_number",
                                  "permanent_street_name"
                                ]
                              },
                              "else": {
                                "properties": {
                                  "permanent_outside_town": {
                                    "type": "string",
                                    "title": "Town",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_outside_street_name": {
                                    "type": "string",
                                    "title": "Tole/Street",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_postal_code": {
                                    "type": "string",
                                    "title": "Postal Code",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  }
                                },
                                "required": [
                                  "permanent_outside_town",
                                  "permanent_outside_street_name",
                                  "permanent_postal_code"
                                ]
                              }
                            }
                          },
                          "required": ["permanent_country"]
                        },
                        "else": {
                          "properties": {
                            "permanent_country": {
                              "type": "string",
                              "title": "Permanent Country",
                              "group": "Contact Detail"
                            },
                            "id_type_details": {
                              "type": "array",
                              "title": "Identification Detail",
                              "group": "Identification Detail",
                              "minItems": 1,
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id_type_id": {
                                    "type": "string",
                                    "title": "Identification",
                                    "hideTitle": true,
                                    "group": "Identification Detail"
                                  }
                                },
                                "required": ["id_type_id"],
                                "dependencies": {
                                  "id_type_id": {
                                    "oneOf": [
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "ce66bc73-158b-42e5-b445-095c193d0137"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },

                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "b30feb72-988d-4bca-8b1a-f41f7cf52462"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "d33cd0aa-896f-40d3-9c61-cacd8ff84f3f"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },

                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "a4e3fa6d-133d-40da-8996-444207b7f2a2",
                                                  "readOnly": true
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "4dc4c231-ca03-4148-9167-04e4404cc970",
                                              "4fcd4a69-59f3-4de2-986f-c56e07d223cd"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issued_district_text": {
                                            "type": "string",
                                            "title": "Place Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true
                                          },
                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "85bdeca6-4cb1-435e-a81c-e65a04a910f4"
                                          }
                                        },
                                        "allOf": [
                                          {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "const": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                }
                                              },
                                              "required": ["issue_country"]
                                            },
                                            "then": {
                                              "properties": {},
                                              "required": []
                                            }
                                          }
                                        ],
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                                                    "636a6628-2b78-4e21-97a6-b276b2f9efb3"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {}
                                            },
                                            "else": {
                                              "properties": {
                                                "visa_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Visa Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "visa_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Visa Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },

                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "28dfb4b6-3315-4965-b8d6-6e2db2d732ea",
                                              "b245253e-fcea-4609-950d-0c8a9b5d07d9"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "f9254205-8b66-44ca-9e75-1145a1130c78"
                                                }
                                              },
                                              "required": [
                                                "issued_district",
                                                "issuing_authority"
                                              ]
                                            },
                                            "else": {
                                              "properties": {
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": [
                                                "issued_district_text"
                                              ]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "464bac44-cb47-4a20-b0ea-334f26551f8a"
                                            ]
                                          },
                                          "national_id_number": {
                                            "type": "string",
                                            "title": "National ID Number",
                                            "group": "Identification Detail"
                                          },
                                          "citizenship_number": {
                                            "type": "string",
                                            "title": "Citizenship Number",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },

                                          "comment": {
                                            "type": "string",
                                            "title": "Comment",
                                            "text": "textarea",
                                            "width": "full",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },

                                        "required": [
                                          "national_id_number",
                                          "comment"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "3379d6f6-cc1b-4cdc-ae2a-440292b95c50"
                                            ]
                                          },
                                          "nrn_card_number": {
                                            "type": "string",
                                            "title": "NRN Card No.",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",

                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "bf99155d-a772-4b30-b646-b0806179499f"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",

                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      },
                                      {
                                        "properties": {
                                          "id_type_id": {
                                            "enum": [
                                              "011ef0e7-27a0-4337-8a8e-ef0492984c5a"
                                            ]
                                          },
                                          "identification_number": {
                                            "type": "string",
                                            "title": "Identity Number",
                                            "group": "Identification Detail"
                                          },
                                          "issue_country": {
                                            "type": "string",
                                            "title": "Country Of Issue",
                                            "group": "Identification Detail",
                                            "hideTitle": true,
                                            "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          },

                                          "issuing_authority": {
                                            "type": "string",
                                            "title": "Issuing Authority",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "default": "54a9fcd6-777c-4b4d-9d52-775eed06f003"
                                          },
                                          "id_issued_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "hideTitle": true,
                                            "title": "Issued Date (A.D)",
                                            "group": "Identification Detail"
                                          },
                                          "id_issued_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Issued Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail"
                                          },
                                          "id_expiry_date_ad": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (A.D)",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "readOnly": true
                                          },
                                          "id_expiry_date_bs": {
                                            "type": "string",
                                            "format": "date",
                                            "title": "Expiry Date (B.S)",
                                            "hideTitle": true,
                                            "group": "Identification Detail",
                                            "readOnly": true
                                          }
                                        },
                                        "dependencies": {
                                          "issue_country": {
                                            "if": {
                                              "properties": {
                                                "issue_country": {
                                                  "enum": [
                                                    "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                  ]
                                                }
                                              }
                                            },
                                            "then": {
                                              "properties": {
                                                "issued_district": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                }
                                              },
                                              "required": ["issued_district"]
                                            }
                                          }
                                        },
                                        "required": [
                                          "identification_number",
                                          "issue_country",
                                          "issuing_authority",
                                          "id_issued_date_ad",
                                          "id_issued_date_bs",
                                          "id_expiry_date_ad",
                                          "id_expiry_date_bs"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          },
                          "dependencies": {
                            "permanent_country": {
                              "if": {
                                "properties": {
                                  "permanent_country": {
                                    "enum": [
                                      "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                    ]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "permanent_province": {
                                    "type": "string",
                                    "title": "Permanent Province",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_district": {
                                    "type": "string",
                                    "title": "Permanent District",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_municipality": {
                                    "type": "string",
                                    "title": "Permanent Municipility",
                                    "group": "Contact Detail"
                                  },
                                  "permanent_ward_number": {
                                    "type": "string",
                                    "title": "Ward No",
                                    "group": "Contact Detail",
                                    "pattern": "^[0-9]{1,2}$",
                                    "errorMessage": {
                                      "pattern": "Allowed 2 number only"
                                    }
                                  },
                                  "permanent_street_name": {
                                    "type": "string",
                                    "title": "Tole/Street",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_town": {
                                    "type": "string",
                                    "title": "Town",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_house_number": {
                                    "type": "string",
                                    "title": "House No",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  }
                                },
                                "required": [
                                  "permanent_province",
                                  "permanent_district",
                                  "permanent_municipality",
                                  "permanent_ward_number",
                                  "permanent_street_name"
                                ]
                              },
                              "else": {
                                "properties": {
                                  "permanent_outside_town": {
                                    "type": "string",
                                    "title": "Town",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_outside_street_name": {
                                    "type": "string",
                                    "title": "Tole/Street",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  },
                                  "permanent_postal_code": {
                                    "type": "string",
                                    "title": "Postal Code",
                                    "group": "Contact Detail",
                                    "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                    "errorMessage": {
                                      "pattern": "Only alphanumeric characters and spaces are allowed."
                                    }
                                  }
                                },
                                "required": [
                                  "permanent_outside_town",
                                  "permanent_outside_street_name",
                                  "permanent_postal_code"
                                ]
                              }
                            }
                          },
                          "required": ["permanent_country"]
                        }
                      },

                      "email_not_available": {
                        "if": {
                          "properties": {
                            "email_not_available": {
                              "const": true
                            }
                          }
                        },
                        "then": {
                          "properties": {
                            "email": {
                              "readOnly": true
                            }
                          }
                        },
                        "else": {
                          "properties": {
                            "email": {
                              "readOnly": false
                            }
                          }
                        }
                      }
                    }
                  },
                  "else": {
                    "properties": {
                      "related_party_detail": {
                        "type": "array",
                        "minItems": 1,
                        "group": "Related Party",
                        "hideTitle": true,
                        "width": "full",
                        "buttonWidth": "full",

                        "items": {
                          "type": "object",
                          "required": [
                            "first_name",
                            "last_name",
                            "father_name",
                            "date_of_birth_ad",
                            "date_of_birth_bs",
                            "dedup_identification",
                            "dedup_id_number",
                            "has_document",
                            "relation_with_account_holder",
                            "salutation",
                            "marital_status",
                            "gender",
                            "email",
                            "nationality",
                            "contact_type",
                            "occupation_type",
                            "source_of_income",
                            "customer_type_id",
                            "constitution_code_id",
                            "customer_status",
                            "pep",
                            "pep_declaration",
                            "family_pep_declaration",
                            "adverse_media",
                            "customer_account_status",
                            "loan_status",
                            "is_blacklisted",
                            "customer_business_involvement"
                          ],

                          "properties": {
                            "pep": {
                              "type": "string",
                              "title": "Politically Exposed Person (PEP) ?",
                              "group": "Declaration",
                              "enum": ["Yes", "No"]
                            },
                            "pep_declaration": {
                              "type": "string",
                              "title": "Customer self declares as PEP, is it correct?",
                              "group": "Declaration",
                              "enum": ["Yes", "No"],
                              "width": 8
                            },
                            "family_pep_declaration": {
                              "type": "string",
                              "title": "Customer declares family member as PEP or as associate PEP ?",
                              "group": "Declaration",
                              "enum": ["Yes", "No"],
                              "width": 10
                            },
                            "adverse_media": {
                              "type": "string",
                              "title": "Adverse Media",
                              "group": "Declaration",
                              "enum": ["Yes", "No"]
                            },

                            "customer_account_status": {
                              "type": "string",
                              "title": " Has the customer maintained an account with us ?",
                              "group": "statusOfClient",
                              "enum": ["Yes", "No"],
                              "width": 8
                            },
                            "loan_status": {
                              "type": "string",
                              "title": "Has the customer taken any loan with us in the past ?",
                              "group": "statusOfClient",
                              "enum": ["Yes", "No"],
                              "width": 8
                            },
                            "is_blacklisted": {
                              "type": "string",
                              "title": "Has the customer being blacklisted by us ?",
                              "group": "statusOfClient",
                              "enum": ["Yes", "No"],
                              "width": 8
                            },
                            "customer_business_involvement": {
                              "type": "string",
                              "title": "Is the customer involved in any other high risk business ?",
                              "group": "statusOfClient",
                              "enum": ["Yes", "No"],
                              "width": 8
                            },
                            "customer_type_id": {
                              "type": "string",
                              "title": "Customer Type",
                              "group": "Account Information"
                            },
                            "constitution_code_id": {
                              "type": "string",
                              "title": "Constitution Code",
                              "group": "Account Information"
                            },
                            "customer_status": {
                              "type": "string",
                              "title": "Customer Status",
                              "group": "Account Information",
                              "enum": ["Good", "Bad", "Doubtful"],
                              "default": "Good"
                            },

                            "relation_with_account_holder": {
                              "type": "string",
                              "title": "Relationship with the accoutholder ?",
                              "group": "personalInformation"
                            },
                            "calculate_risk": {
                              "type": "string",
                              "title": "Calculate Risk",
                              "group": "Risk"
                            },
                            "risk_level": {
                              "type": "string",
                              "group": "Risk",
                              "title": "Risk Level",
                              "readOnly": true
                            },
                            "risk_score": {
                              "type": "number",
                              "title": "Risk Score",
                              "group": "Risk",
                              "readOnly": true
                            },
                            "first_name": {
                              "type": "string",
                              "title": "First Name",
                              "group": "Duplication Check Module",

                              "pattern": "^[a-zA-Z]*$",
                              "errorMessage": {
                                "pattern": "Alphabets only"
                              }
                            },
                            "middle_name": {
                              "type": "string",
                              "title": "Middle Name",
                              "group": "Duplication Check Module",

                              "pattern": "^[a-zA-Z]*$",
                              "errorMessage": {
                                "pattern": "Alphabets only"
                              }
                            },
                            "last_name": {
                              "type": "string",
                              "title": "Last Name",
                              "group": "Duplication Check Module",
                              "connect": "last_name_not_available",
                              "pattern": "^[a-zA-Z\\s/.]*$",
                              "errorMessage": {
                                "pattern": "Alphabets and spaces only"
                              }
                            },

                            "last_name_not_available": {
                              "type": "boolean",
                              "title": "If last name not available?",
                              "group": "Duplication Check Module"
                            },
                            "father_name": {
                              "type": "string",
                              "title": "Father Name",
                              "group": "Duplication Check Module",

                              "pattern": "^[a-zA-Z\\s]*$",
                              "errorMessage": {
                                "pattern": "Alphabets and spaces only"
                              }
                            },
                            "marital_status": {
                              "type": "string",
                              "title": "Marital Status",
                              "group": "personalInformation"
                            },
                            "dedup_identification": {
                              "type": "string",
                              "title": "Identification",
                              "group": "Duplication Check Module",
                              "default": "2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"
                            },
                            "dedup_id_number": {
                              "type": "string",
                              "title": "Identification Number",
                              "group": "Duplication Check Module"
                            },
                            "date_of_birth_ad": {
                              "type": "string",
                              "format": "date",
                              "group": "Duplication Check Module",

                              "title": "Date of Birth (A.D.)"
                            },
                            "date_of_birth_bs": {
                              "type": "string",
                              "format": "date",
                              "group": "Duplication Check Module",
                              "title": "Date of Birth (B.S.)"
                            },

                            "dedup_check": {
                              "type": "string",
                              "title": "Dedup Check",
                              "group": "Duplication Check Module",
                              "width": "full"
                            },
                            "dedup_module_data": {
                              "type": "string",
                              "width": "full",
                              "group": "Duplication Check Module",

                              "columns": [
                                { "key": "full_name", "label": "Name" },
                                { "key": "cif_number", "label": "Cif Number" },
                                {
                                  "key": "grand_father_name",
                                  "label": "Grand Father Name"
                                },
                                {
                                  "key": "father_name",
                                  "label": "Father Name"
                                },
                                {
                                  "key": "mother_name",
                                  "label": "Mother Name"
                                },
                                {
                                  "key": "date_of_birth_ad",
                                  "label": "Date of Birth"
                                },
                                {
                                  "key": "identification_number",
                                  "label": "Citizenship Number"
                                }
                              ],
                              "actions": [
                                {
                                  "label": "Match",
                                  "icon": "match",
                                  "tooltip": "Matched Detail",
                                  "actionKey": "match"
                                }
                              ]
                            },
                            "has_cif": {
                              "type": "boolean",
                              "title": "Has CIF Number?",
                              "group": "Primary Account Information",
                              "hideTitle": true,

                              "width": "full"
                            },

                            "has_document": {
                              "type": "string",
                              "enum": ["Yes", "No"],
                              "title": "Has all document been received?",
                              "group": "Account Information"
                            },

                            "salutation": {
                              "type": "string",
                              "title": "Salutation",
                              "width": "full",
                              "group": "personalInformation"
                            },

                            "gender": {
                              "type": "string",
                              "title": "Gender",
                              "group": "personalInformation"
                            },

                            "nationality": {
                              "type": "string",
                              "title": "Nationality",
                              "group": "Account Information",
                              "default": "9c0c15a4-c05c-4355-a880-4c9798543152"
                            },
                            "contact_type": {
                              "type": "string",
                              "title": "Contact Number Type",
                              "group": "Contact Detail",
                              "enum": [
                                "No Contact Detail",
                                "Mobile Number",
                                "Phone Number",
                                "Both Contact Detail"
                              ]
                            },

                            "email_not_available": {
                              "type": "boolean",
                              "title": "If email not available?",
                              "group": "personalInformation"
                            },
                            "email": {
                              "type": "string",
                              "title": "Email",
                              "group": "personalInformation",
                              "pattern": "^(N/A|\\.|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$",
                              "errorMessage": {
                                "pattern": "Invalid Email Address"
                              }
                            },

                         
                            "family_information": {
                              "type": "array",
                              "title": "Family Information",
                              "hideTitle": true,
                              "minItems": 3,
                              "maxItems": 3,
                              "default": [
                                {
                                  "family_member_relation": "66a40508-67f6-4303-9f88-8537ff195007"
                                },
                                {
                                  "family_member_relation": "fa7a30e3-4418-448c-9d4d-bbe77dcd6282"
                                },
                                {
                                  "family_member_relation": "6c165fe8-9d19-481f-b6d3-326eabfac249"
                                }
                              ],
                              "items": {
                                "type": "object",
                                "properties": {
                                  "family_member_relation": {
                                    "type": "string",
                                    "title": "Relationship"
                                  },
                                  "family_member_full_name": {
                                    "type": "string",
                                    "title": "Full Name"
                                  },
                                  "is_family_name_not_available": {
                                    "type": "boolean",
                                    "title": "Member not available?"
                                  }
                                },
                                "dependencies": {
                                  "is_family_name_not_available": {
                                    "oneOf": [
                                      {
                                        "properties": {
                                          "is_family_name_not_available": {
                                            "const": true
                                          },
                                          "family_member_full_name": {
                                            "readOnly": true
                                          }
                                        }
                                      },
                                      {
                                        "properties": {
                                          "is_family_name_not_available": {
                                            "const": false
                                          }
                                        },
                                        "required": ["family_member_full_name"]
                                      }
                                    ]
                                  }
                                }
                              },
                              "group": "familyInformation"
                            },

                            "occupation_type": {
                              "type": "string",
                              "title": "Occupation Type",
                              "group": "Occupation/Profession/Business Details"
                            },
                            "source_of_income": {
                              "type": "string",
                              "title": "Source of Income",
                              "group": "Occupation/Profession/Business Details"
                            },

                            "personal_info_screening": {
                              "type": "string",
                              "width": "full",
                              "title": "Screening",
                              "group": ""
                            },

                            "personal_screening_data": {
                              "type": "string",
                              "width": "full",
                              "group": "",
                              "additionalProperties": true,
                              "columns": [
                                { "key": "name", "label": "Name" },
                                {
                                  "key": "father_name",
                                  "label": "Father Name"
                                },
                                { "key": "dob", "label": "Date of Birth" },
                                {
                                  "key": "citizenship_numbers",
                                  "label": "Citizenship Number"
                                },
                                {
                                  "key": "match_percentage",
                                  "label": "Matching Percentage"
                                }
                              ],
                              "actions": [
                                {
                                  "label": "View",
                                  "icon": "view",
                                  "tooltip": "View Detail",
                                  "actionKey": "view"
                                }
                              ]
                            },

                            "current_country": {
                              "type": "string",
                              "title": "Current Country",
                              "group": "Current",
                              "hideTitle": true,
                              "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                            }
                          },

                          "dependencies": {
                            "occupation_type": {
                              "if": {
                                "properties": {
                                  "occupation_type": {
                                    "enum": [
                                      "4a3fa6bb-7580-4a7d-8479-0b44f31f58a6",
                                      "9491dcf6-88a4-496c-82ee-0389a71fd1ec",
                                      "cddfc23d-86b6-44cf-b640-25155cd3e52d",
                                      "8bc2b5f3-bb2b-4742-a932-79462f809e68",
                                      "d3e087fa-5104-468b-80b7-5a6d6fe431d4"
                                    ]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "occupation_detail": {
                                    "type": "array",
                                    "title": "Occupation",
                                    "group": "Occupation/Profession/Business Details",
                                    "minItems": 1,
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "name_of_organization": {
                                          "type": "string",
                                          "title": "Employer Name"
                                        },
                                        "organization_address": {
                                          "type": "string",
                                          "title": "Address"
                                        },
                                        "organization_contact_number": {
                                          "type": "number",
                                          "title": "Contact No.",
                                          "pattern": "^(\\d{7,12})?$",
                                          "errorMessage": {
                                            "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                          }
                                        },
                                        "designation": {
                                          "type": "string",
                                          "title": "Designation"
                                        },
                                        "business_type": {
                                          "type": "string",
                                          "title": "Business Type"
                                        }
                                      },
                                      "required": [
                                        "name_of_organization",
                                        "organization_address",
                                        "organization_contact_number",
                                        "designation",
                                        "business_type"
                                      ]
                                    }
                                  }
                                }
                              },
                              "else": {
                                "properties": {}
                              }
                            },
                            "pep": {
                              "if": {
                                "properties": {
                                  "pep": {
                                    "enum": ["Yes"]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "pep_category": {
                                    "type": "string",
                                    "enum": [
                                      "Existing PEPs",
                                      "Former PEPs",
                                      "High-ranking officials from neighbouring or nearby countries",
                                      "Other foreign PEPs",
                                      "International PEPs"
                                    ],
                                    "title": "Pep Category",
                                    "group": "Declaration"
                                  }
                                },
                                "required": ["pep_category"]
                              }
                            },
                            "adverse_media": {
                              "if": {
                                "properties": {
                                  "adverse_media": {
                                    "enum": ["Yes"]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "adverse_category": {
                                    "type": "string",
                                    "enum": [
                                      "Money Laundering",
                                      "Terrorist Financing",
                                      "Financial Fraud",
                                      "Organized Crime"
                                    ],
                                    "title": "Category of Adverse",
                                    "group": "Declaration"
                                  }
                                },
                                "required": ["adverse_category"]
                              }
                            },

                            "customer_account_status": {
                              "if": {
                                "properties": {
                                  "customer_account_status": {
                                    "enum": ["Yes"]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "existing_risk_rating": {
                                    "type": "string",
                                    "title": "Existing Risk Rating",
                                    "group": "statusOfClient",
                                    "width": 8
                                  }
                                },
                                "required": ["existing_risk_rating"]
                              }
                            },
                            "current_country": {
                              "oneOf": [
                                {
                                  "properties": {
                                    "current_country": {
                                      "enum": [
                                        "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                      ]
                                    },
                                    "current_province": {
                                      "type": "string",
                                      "title": "Current Province",
                                      "masterDataKey": "provinces",
                                      "group": "Current",
                                      "hideTitle": true
                                    },
                                    "current_district": {
                                      "type": "string",
                                      "title": "Current District",
                                      "group": "Current",
                                      "hideTitle": true,
                                      "masterDataKey": "districts"
                                    },
                                    "current_municipality": {
                                      "type": "string",
                                      "title": "Current Municipality",
                                      "group": "Current",
                                      "hideTitle": true,
                                      "masterDataKey": "local_bodies"
                                    },
                                    "current_ward_number": {
                                      "type": "string",
                                      "title": "Ward No",
                                      "pattern": "^[0-9]{1,2}$",
                                      "group": "Current",
                                      "hideTitle": true,
                                      "errorMessage": {
                                        "pattern": "Allowed 2 numbers only"
                                      }
                                    },
                                    "current_street_name": {
                                      "type": "string",
                                      "title": "Tole/Street",
                                      "group": "Current",
                                      "hideTitle": true,
                                      "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                      "errorMessage": {
                                        "pattern": "Only alphanumeric characters and spaces are allowed."
                                      }
                                    },
                                    "current_town": {
                                      "type": "string",
                                      "title": "Town",

                                      "group": "Current",
                                      "hideTitle": true,
                                      "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                      "errorMessage": {
                                        "pattern": "Only alphanumeric characters and spaces are allowed."
                                      }
                                    },
                                    "current_house_number": {
                                      "type": "string",
                                      "title": "House No",
                                      "group": "Current",
                                      "hideTitle": true,
                                      "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                      "errorMessage": {
                                        "pattern": "Only alphanumeric characters and spaces are allowed."
                                      }
                                    }
                                  }
                                },
                                {
                                  "properties": {
                                    "current_country": {
                                      "not": {
                                        "enum": [
                                          "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                        ]
                                      }
                                    },
                                    "current_outside_town": {
                                      "type": "string",
                                      "title": "Outside Town",
                                      "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                      "errorMessage": {
                                        "pattern": "Only alphanumeric characters and spaces are allowed."
                                      },
                                      "group": "Current",
                                      "hideTitle": true
                                    },
                                    "current_outside_street_name": {
                                      "type": "string",
                                      "title": "Outside Tole/Street",

                                      "group": "Current",
                                      "hideTitle": true,
                                      "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                      "errorMessage": {
                                        "pattern": "Only alphanumeric characters and spaces are allowed."
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "contact_type": {
                              "oneOf": [
                                {
                                  "properties": {
                                    "contact_type": {
                                      "enum": ["Phone Number"]
                                    },
                                    "phone_country_code": {
                                      "type": "string",
                                      "title": "Code",
                                      "group": "Contact Detail",
                                      "width": 4,
                                      "default": "16821317-efa5-469b-9858-e283ce2052ec"
                                    },
                                    "phone_number": {
                                      "type": "number",
                                      "title": "Phone Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{7,12})?$",
                                      "width": 5,
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                      }
                                    }
                                  },
                                  "required": [
                                    "phone_country_code",
                                    "phone_number"
                                  ]
                                },
                                {
                                  "properties": {
                                    "contact_type": {
                                      "enum": ["Mobile Number"]
                                    },
                                    "mobile_country_code": {
                                      "type": "string",
                                      "title": "Code",
                                      "group": "Contact Detail",
                                      "width": 4,
                                      "default": "16821317-efa5-469b-9858-e283ce2052ec"
                                    }
                                  },
                                  "dependencies": {
                                    "mobile_country_code": {
                                      "if": {
                                        "properties": {
                                          "mobile_country_code": {
                                            "enum": [
                                              "16821317-efa5-469b-9858-e283ce2052ec"
                                            ]
                                          }
                                        }
                                      },
                                      "then": {
                                        "properties": {
                                          "mobile_number": {
                                            "type": "number",
                                            "title": "Mobile Number",
                                            "group": "Contact Detail",
                                            "pattern": "^(\\d{10})?$",
                                            "width": 5,
                                            "errorMessage": {
                                              "pattern": "Mobile number must be 10 digits without parentheses or dashes."
                                            }
                                          }
                                        },
                                        "required": ["mobile_number"]
                                      },
                                      "else": {
                                        "properties": {
                                          "mobile_number": {
                                            "type": "number",
                                            "title": "Mobile Number",
                                            "group": "Contact Detail",
                                            "pattern": "^(\\d{7,12})?$",
                                            "errorMessage": {
                                              "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                            }
                                          }
                                        },
                                        "required": ["mobile_number"]
                                      }
                                    }
                                  },
                                  "required": ["mobile_country_code"]
                                },
                                {
                                  "properties": {
                                    "contact_type": {
                                      "enum": ["Both Contact Detail"]
                                    },
                                    "phone_country_code": {
                                      "type": "string",
                                      "title": "Code",
                                      "group": "Contact Detail",
                                      "width": 4,
                                      "default": "16821317-efa5-469b-9858-e283ce2052ec"
                                    },
                                    "phone_number": {
                                      "type": "number",
                                      "title": "Phone Number",
                                      "group": "Contact Detail",
                                      "pattern": "^(\\d{7,12})?$",
                                      "width": 5,
                                      "errorMessage": {
                                        "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                      }
                                    },
                                    "mobile_country_code": {
                                      "type": "string",
                                      "title": "Code",
                                      "group": "Contact Detail",
                                      "width": 4,
                                      "default": "16821317-efa5-469b-9858-e283ce2052ec"
                                    }
                                  },
                                  "required": [
                                    "phone_country_code",
                                    "phone_number",
                                    "mobile_country_code"
                                  ],
                                  "dependencies": {
                                    "mobile_country_code": {
                                      "if": {
                                        "properties": {
                                          "mobile_country_code": {
                                            "enum": [
                                              "16821317-efa5-469b-9858-e283ce2052ec"
                                            ]
                                          }
                                        }
                                      },
                                      "then": {
                                        "properties": {
                                          "mobile_number": {
                                            "type": "number",
                                            "title": "Mobile Number",
                                            "group": "Contact Detail",
                                            "pattern": "^(\\d{10})?$",
                                            "width": 5,
                                            "errorMessage": {
                                              "pattern": "Mobile number must be 10 digits without parentheses or dashes."
                                            }
                                          }
                                        },
                                        "required": ["mobile_number"]
                                      },
                                      "else": {
                                        "properties": {
                                          "mobile_number": {
                                            "type": "number",
                                            "title": "Mobile Number",
                                            "group": "Contact Detail",
                                            "pattern": "^(\\d{7,12})?$",
                                            "width": 5,
                                            "errorMessage": {
                                              "pattern": "Mobile number must be 7 to 12 digits without parentheses or dashes."
                                            }
                                          }
                                        },
                                        "required": ["mobile_number"]
                                      }
                                    }
                                  }
                                },
                                {
                                  "properties": {
                                    "contact_type": {
                                      "enum": ["No Contact Detail"]
                                    }
                                  }
                                }
                              ]
                            },

                            "last_name_not_available": {
                              "if": {
                                "properties": {
                                  "last_name_not_available": {
                                    "const": true
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "last_name": {
                                    "readOnly": true
                                  }
                                }
                              },
                              "else": {
                                "properties": {
                                  "last_name": {
                                    "readOnly": false
                                  }
                                }
                              }
                            },

                            "has_cif": {
                              "if": {
                                "properties": {
                                  "has_cif": {
                                    "const": true
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "cif_number": {
                                    "type": "string",
                                    "title": "CIF Number",
                                    "group": "Primary Account Information",
                                    "hideTitle": true
                                  },
                                  "cif_enquiry": {
                                    "type": "string",
                                    "title": "Proceed",
                                    "hideTitle": true,

                                    "group": "Primary Account Information"
                                  }
                                },
                                "required": ["cif_number"]
                              }
                            },
                            "nationality": {
                              "if": {
                                "properties": {
                                  "nationality": {
                                    "enum": [
                                      "9c0c15a4-c05c-4355-a880-4c9798543152"
                                    ]
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "permanent_country": {
                                    "type": "string",
                                    "title": "Permanent Country",
                                    "group": "Contact Detail",
                                    "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                                    "readOnly": true
                                  },
                                  "same_as_permanent": {
                                    "type": "boolean",
                                    "title": "Same As Permanent Address",
                                    "group": "Contact Detail",
                                    "width": "full",
                                    "default": false
                                  },
                                  "dedup_identification": {
                                    "readOnly": true
                                  },
                                  "id_type_details": {
                                    "type": "array",
                                    "title": "Identification Detail",
                                    "group": "Identification Detail",
                                    "minItems": 1,
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id_type_id": {
                                          "type": "string",
                                          "title": "Identification",
                                          "hideTitle": true,
                                          "group": "Identification Detail"
                                        }
                                      },
                                      "required": ["id_type_id"],
                                      "dependencies": {
                                        "id_type_id": {
                                          "oneOf": [
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["ce66bc73-158b-42e5-b445-095c193d0137"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                        
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["b30feb72-988d-4bca-8b1a-f41f7cf52462"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["d33cd0aa-896f-40d3-9c61-cacd8ff84f3f"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                        
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "a4e3fa6d-133d-40da-8996-444207b7f2a2",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": [
                                                    "4dc4c231-ca03-4148-9167-04e4404cc970",
                                                    "4fcd4a69-59f3-4de2-986f-c56e07d223cd"
                                                  ]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                        
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": [
                                                          "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                                                          "636a6628-2b78-4e21-97a6-b276b2f9efb3"
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138"
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "85bdeca6-4cb1-435e-a81c-e65a04a910f4"
                                                      },
                                                      "visa_issued_date_ad": {
                                                        "type": "string",
                                                        "format": "date",
                                                        "title": "Visa Issued Date (A.D)",
                                                        "hideTitle": true,
                                       
                 "group": "Identification Detail"
                                                      },
                                                      "visa_expiry_date_ad": {
                                                        "type": "string",
                                                        "format": "date",
                                                        "title": "Visa Expiry Date (A.D)",
                                                        "hideTitle": true,
                                                        "group": "Identification Detail"
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                        
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": [
                                                    "28dfb4b6-3315-4965-b8d6-6e2db2d732ea",
                                                    "b245253e-fcea-4609-950d-0c8a9b5d07d9"
                                                  ]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78"
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["464bac44-cb47-4a20-b0ea-334f26551f8a"]
                                                },
                                                "national_id_number": {
                                                  "type": "string",
                                                  "title": "National ID Number",
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                        
                                                "comment": {
                                                  "type": "string",
                                                  "title": "Comment",
                                                  "text": "textarea",
                                                  "width": "full",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                        
                                              "required": ["national_id_number", "comment"]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["3379d6f6-cc1b-4cdc-ae2a-440292b95c50"]
                                                },
                                                "nrn_card_number": {
                                                  "type": "string",
                                                  "title": "NRN Card No.",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                        
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["bf99155d-a772-4b30-b646-b0806179499f"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                        
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["011ef0e7-27a0-4337-8a8e-ef0492984c5a"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "default": "54a9fcd6-777c-4b4d-9d52-775eed06f003"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "readOnly": true
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "readOnly": true
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                "dependencies": {
                                  "permanent_country": {
                                    "if": {
                                      "properties": {
                                        "permanent_country": {
                                          "enum": [
                                            "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          ]
                                        }
                                      }
                                    },
                                    "then": {
                                      "properties": {
                                        "permanent_province": {
                                          "type": "string",
                                          "title": "Permanent Province",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_district": {
                                          "type": "string",
                                          "title": "Permanent District",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_municipality": {
                                          "type": "string",
                                          "title": "Permanent Municipility",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_ward_number": {
                                          "type": "string",
                                          "title": "Ward No",
                                          "group": "Contact Detail",
                                          "pattern": "^[0-9]{1,2}$",
                                          "errorMessage": {
                                            "pattern": "Allowed 2 number only"
                                          }
                                        },
                                        "permanent_street_name": {
                                          "type": "string",
                                          "title": "Tole/Street",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_town": {
                                          "type": "string",
                                          "title": "Town",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_house_number": {
                                          "type": "string",
                                          "title": "House No",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        }
                                      },
                                      "required": [
                                        "permanent_province",
                                        "permanent_district",
                                        "permanent_municipality",
                                        "permanent_ward_number",
                                        "permanent_street_name"
                                      ]
                                    },
                                    "else": {
                                      "properties": {
                                        "permanent_outside_town": {
                                          "type": "string",
                                          "title": "Town",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_outside_street_name": {
                                          "type": "string",
                                          "title": "Tole/Street",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_postal_code": {
                                          "type": "string",
                                          "title": "Postal Code",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        }
                                      },
                                      "required": [
                                        "permanent_outside_town",
                                        "permanent_outside_street_name",
                                        "permanent_postal_code"
                                      ]
                                    }
                                  }
                                },
                                "required": ["permanent_country"]
                              },
                              "else": {
                                "properties": {
                                  "permanent_country": {
                                    "type": "string",
                                    "title": "Permanent Country",
                                    "group": "Contact Detail"
                                  },
                                  "id_type_details": {
                                    "type": "array",
                                    "title": "Identification Detail",
                                    "group": "Identification Detail",
                                    "minItems": 1,
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id_type_id": {
                                          "type": "string",
                                          "title": "Identification",
                                          "hideTitle": true,
                                          "group": "Identification Detail"
                                        }
                                      },
                                      "required": ["id_type_id"],
                                      "dependencies": {
                                        "id_type_id": {
                                          "oneOf": [
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["2f256727-f8a0-4e50-b1e0-42bef3b0d5a1"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "afbbc41c-1ff4-4e5b-a12f-ae1424853138",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["ce66bc73-158b-42e5-b445-095c193d0137"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                        
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["b30feb72-988d-4bca-8b1a-f41f7cf52462"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["d33cd0aa-896f-40d3-9c61-cacd8ff84f3f"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                        
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "a4e3fa6d-133d-40da-8996-444207b7f2a2",
                                                        "readOnly": true
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": [
                                                    "4dc4c231-ca03-4148-9167-04e4404cc970",
                                                    "4fcd4a69-59f3-4de2-986f-c56e07d223cd"
                                                  ]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issued_district_text": {
                                                  "type": "string",
                                                  "title": "Place Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "85bdeca6-4cb1-435e-a81c-e65a04a910f4"
                                                }
                                              },
                                              "allOf": [
                                                {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "const": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                      }
                                                    },
                                                    "required": ["issue_country"]
                                                  },
                                                  "then": {
                                                    "properties": {},
                                                    "required": []
                                                  }
                                                }
                                              ],
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": [
                                                          "79f0a217-d50c-4bc6-a509-8a300f9a30c2",
                                                          "636a6628-2b78-4e21-97a6-b276b2f9efb3"
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {}
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "visa_issued_date_ad": {
                                                        "type": "string",
                                                        "format": "date",
                                                        "title": "Visa Issued Date (A.D)",
                                                        "hideTitle": true,
                                                        "group": "Identification Detail"
                                                      },
                                                      "visa_expiry_date_ad": {
                                                        "type": "string",
                                                        "format": "date",
                                                        "title": "Visa Expiry Date (A.D)",
                                                        "hideTitle": true,
                                                        "group": "Identification Detail"
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                        
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": [
                                                    "28dfb4b6-3315-4965-b8d6-6e2db2d732ea",
                                                    "b245253e-fcea-4609-950d-0c8a9b5d07d9"
                                                  ]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      },
                                                      "issuing_authority": {
                                                        "type": "string",
                                                        "title": "Issuing Authority",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true,
                                                        "default": "f9254205-8b66-44ca-9e75-1145a1130c78"
                                                      }
                                                    },
                                                    "required": ["issued_district", "issuing_authority"]
                                                  },
                                                  "else": {
                                                    "properties": {
                                                      "issued_district_text": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district_text"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["464bac44-cb47-4a20-b0ea-334f26551f8a"]
                                                },
                                                "national_id_number": {
                                                  "type": "string",
                                                  "title": "National ID Number",
                                                  "group": "Identification Detail"
                                                },
                                                "citizenship_number": {
                                                  "type": "string",
                                                  "title": "Citizenship Number",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                        
                                                "comment": {
                                                  "type": "string",
                                                  "title": "Comment",
                                                  "text": "textarea",
                                                  "width": "full",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                        
                                              "required": ["national_id_number", "comment"]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["3379d6f6-cc1b-4cdc-ae2a-440292b95c50"]
                                                },
                                                "nrn_card_number": {
                                                  "type": "string",
                                                  "title": "NRN Card No.",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                        
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["bf99155d-a772-4b30-b646-b0806179499f"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                        
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            },
                                            {
                                              "properties": {
                                                "id_type_id": {
                                                  "enum": ["011ef0e7-27a0-4337-8a8e-ef0492984c5a"]
                                                },
                                                "identification_number": {
                                                  "type": "string",
                                                  "title": "Identity Number",
                                                  "group": "Identification Detail"
                                                },
                                                "issue_country": {
                                                  "type": "string",
                                                  "title": "Country Of Issue",
                                                  "group": "Identification Detail",
                                                  "hideTitle": true,
                                                  "default": "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                                },
                        
                                                "issuing_authority": {
                                                  "type": "string",
                                                  "title": "Issuing Authority",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "default": "54a9fcd6-777c-4b4d-9d52-775eed06f003"
                                                },
                                                "id_issued_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "hideTitle": true,
                                                  "title": "Issued Date (A.D)",
                                                  "group": "Identification Detail"
                                                },
                                                "id_issued_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Issued Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail"
                                                },
                                                "id_expiry_date_ad": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (A.D)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "readOnly": true
                                                },
                                                "id_expiry_date_bs": {
                                                  "type": "string",
                                                  "format": "date",
                                                  "title": "Expiry Date (B.S)",
                                                  "hideTitle": true,
                                                  "group": "Identification Detail",
                                                  "readOnly": true
                                                }
                                              },
                                              "dependencies": {
                                                "issue_country": {
                                                  "if": {
                                                    "properties": {
                                                      "issue_country": {
                                                        "enum": ["79f0a217-d50c-4bc6-a509-8a300f9a30c2"]
                                                      }
                                                    }
                                                  },
                                                  "then": {
                                                    "properties": {
                                                      "issued_district": {
                                                        "type": "string",
                                                        "title": "Place Of Issue",
                                                        "group": "Identification Detail",
                                                        "hideTitle": true
                                                      }
                                                    },
                                                    "required": ["issued_district"]
                                                  }
                                                }
                                              },
                                              "required": [
                                                "identification_number",
                                                "issue_country",
                                                "issuing_authority",
                                                "id_issued_date_ad",
                                                "id_issued_date_bs",
                                                "id_expiry_date_ad",
                                                "id_expiry_date_bs"
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                "dependencies": {
                                  "permanent_country": {
                                    "if": {
                                      "properties": {
                                        "permanent_country": {
                                          "enum": [
                                            "79f0a217-d50c-4bc6-a509-8a300f9a30c2"
                                          ]
                                        }
                                      }
                                    },
                                    "then": {
                                      "properties": {
                                        "permanent_province": {
                                          "type": "string",
                                          "title": "Permanent Province",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_district": {
                                          "type": "string",
                                          "title": "Permanent District",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_municipality": {
                                          "type": "string",
                                          "title": "Permanent Municipility",
                                          "group": "Contact Detail"
                                        },
                                        "permanent_ward_number": {
                                          "type": "string",
                                          "title": "Ward No",
                                          "group": "Contact Detail",
                                          "pattern": "^[0-9]{1,2}$",
                                          "errorMessage": {
                                            "pattern": "Allowed 2 number only"
                                          }
                                        },
                                        "permanent_street_name": {
                                          "type": "string",
                                          "title": "Tole/Street",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_town": {
                                          "type": "string",
                                          "title": "Town",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_house_number": {
                                          "type": "string",
                                          "title": "House No",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        }
                                      },
                                      "required": [
                                        "permanent_province",
                                        "permanent_district",
                                        "permanent_municipality",
                                        "permanent_ward_number",
                                        "permanent_street_name"
                                      ]
                                    },
                                    "else": {
                                      "properties": {
                                        "permanent_outside_town": {
                                          "type": "string",
                                          "title": "Town",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_outside_street_name": {
                                          "type": "string",
                                          "title": "Tole/Street",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        },
                                        "permanent_postal_code": {
                                          "type": "string",
                                          "title": "Postal Code",
                                          "group": "Contact Detail",
                                          "pattern": "^[a-zA-Z0-9/\\.\\-,\\s]*$",
                                          "errorMessage": {
                                            "pattern": "Only alphanumeric characters and spaces are allowed."
                                          }
                                        }
                                      },
                                      "required": [
                                        "permanent_outside_town",
                                        "permanent_outside_street_name",
                                        "permanent_postal_code"
                                      ]
                                    }
                                  }
                                },
                                "required": ["permanent_country"]
                              }
                            },

                            "email_not_available": {
                              "if": {
                                "properties": {
                                  "email_not_available": {
                                    "const": true
                                  }
                                }
                              },
                              "then": {
                                "properties": {
                                  "email": {
                                    "readOnly": true
                                  }
                                }
                              },
                              "else": {
                                "properties": {
                                  "email": {
                                    "readOnly": false
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}