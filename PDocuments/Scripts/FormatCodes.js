﻿var formatCodeIncludes = [
	{
		"system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
		"concept": [
			{
				"code": "urn:ihe:pcc:handp:2008",
				"display": "History and Physical Specification"
			},
			{
				"code": "urn:ihe:pcc:xphr:2007",
				"display": "HL7 CCD Document"
			},
			{
				"code": "urn:ihe:pcc:aps:2007",
				"display": "IHE Antepartum Summary"
			},
			{
				"code": "urn:ihe:pcc:xds-ms:2007",
				"display": "XDS Medical Summaries"
			},
			{
				"code": "urn:ihe:pcc:xphr:2007",
				"display": "Personal Health Records"
			},
			{
				"code": "urn:ihe:pcc:edr:2007",
				"display": "Emergency Department Referral (EDR)"
			},
			{
				"code": "urn:ihe:pcc:edes:2007",
				"display": "Emergency Department Encounter Summary (EDES)"
			},
			{
				"code": "urn:ihe:pcc:apr:handp:2008",
				"display": "Antepartum Record (APR) - History and Physical"
			},
			{
				"code": "urn:ihe:pcc:apr:lab:2008",
				"display": "Antepartum Record (APR) - Laboratory"
			},
			{
				"code": "urn:ihe:pcc:apr:edu:2008",
				"display": "Antepartum Record (APR) - Education"
			},
			{
				"code": "urn:ihe:pcc:irc:2008",
				"display": "Immunization Registry Content (IRC)"
			},
			{
				"code": "urn:ihe:pcc:crc:2008",
				"display": "Cancer Registry Content (CRC)"
			},
			{
				"code": "urn:ihe:pcc:cm:2008",
				"display": "Care Management (CM)"
			},
			{
				"code": "urn:ihe:pcc:ic:2009",
				"display": "Immunization Content (IC)"
			},
			{
				"code": "urn:ihe:pcc:tn:2007",
				"display": "PCC TN"
			},
			{
				"code": "urn:ihe:pcc:nn:2007",
				"display": "PCC NN"
			},
			{
				"code": "urn:ihe:pcc:ctn:2007",
				"display": "PCC CTN"
			},
			{
				"code": "urn:ihe:pcc:edpn:2007",
				"display": "PCC EDPN"
			},
			{
				"code": "urn:ihe:pcc:hp:2008",
				"display": "PCC HP"
			},
			{
				"code": "urn:ihe:pcc:ldhp:2009",
				"display": "PCC LDHP"
			},
			{
				"code": "urn:ihe:pcc:lds:2009",
				"display": "PCC LDS"
			},
			{
				"code": "urn:ihe:pcc:mds:2009",
				"display": "PCC MDS"
			},
			{
				"code": "urn:ihe:pcc:nds:2010",
				"display": "PCC NDS"
			},
			{
				"code": "urn:ihe:pcc:ppvs:2010",
				"display": "PCC PPVS"
			},
			{
				"code": "urn:ihe:pcc:trs:2011",
				"display": "PCC TRS"
			},
			{
				"code": "urn:ihe:pcc:ets:2011",
				"display": "PCC ETS"
			},
			{
				"code": "urn:ihe:pcc:its:2011",
				"display": "PCC ITS"
			},
			{
				"code": "urn:ihe:iti:bppc:2007",
				"display": "Basic Patient Privacy Consents"
			},
			{
				"code": "urn:ihe:iti:bppc-sd:2007",
				"display": "Basic Patient Privacy Consents with Scanned Document"
			},
			{
				"code": "urn:ihe:iti:xdw:2011:workflowDoc",
				"display": "XDW Workflow Document"
			},
			{
				"code": "urn:ihe:iti:dsg:detached:2014",
				"display": "DSG Detached Document"
			},
			{
				"code": "urn:ihe:iti:dsg:enveloping:2014",
				"display": "DSG Enveloping Document"
			},
			{
				"code": "urn:ihe:iti:xds-sd:pdf:2008",
				"display": "PDF embedded in CDA per XDS-SD profile"
			},
			{
				"code": "urn:ihe:iti:xds-sd:text:2008",
				"display": "Text embedded in CDA per XDS-SD profile"
			},
			{
				"code": "urn:ihe:lab:xd-lab:2008",
				"display": "CDA Laboratory Report"
			},
			{
				"code": "urn:ihe:rad:TEXT",
				"display": "Radiology XDS-I Text"
			},
			{
				"code": "urn:ihe:rad:PDF",
				"display": "Radiology XDS-I PDF"
			},
			{
				"code": "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
				"display": "Radiology XDS-I Structured CDA"
			},
			{
				"code": "urn:ihe:card:imaging:2011",
				"display": "Cardiac Imaging Report"
			},
			{
				"code": "urn:ihe:card:CRC:2012",
				"display": "Cardiology CRC"
			},
			{
				"code": "urn:ihe:card:EPRC-IE:2014",
				"display": "Cardiology EPRC-IE"
			},
			{
				"code": "urn:ihe:dent:TEXT",
				"display": "Dental Text"
			},
			{
				"code": "urn:ihe:dent:PDF",
				"display": "Dental PDF"
			},
			{
				"code": "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
				"display": "Dental CDA"
			},
			{
				"code": "urn:ihe:pat:apsr:all:2010",
				"display": "Anatomic Pathology Structured Report All"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:all:2010",
				"display": "Anatomic Pathology Structured Report Cancer All"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:breast:2010",
				"display": "Anatomic Pathology Structured Report Cancer Breast"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:colon:2010",
				"display": "Anatomic Pathology Structured Report Cancer Colon"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:prostate:2010",
				"display": "Anatomic Pathology Structured Report Cancer Prostate"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:thyroid:2010",
				"display": "Anatomic Pathology Structured Report Cancer Thyroid"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:lung:2010",
				"display": "Anatomic Pathology Structured Report Cancer Lung"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:skin:2010",
				"display": "Anatomic Pathology Structured Report Cancer Skin"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:kidney:2010",
				"display": "Anatomic Pathology Structured Report Cancer Kidney"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:cervix:2010",
				"display": "Anatomic Pathology Structured Report Cancer Cervix"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:endometrium:2010",
				"display": "Anatomic Pathology Structured Report Cancer Endometrium"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:ovary:2010",
				"display": "Anatomic Pathology Structured Report Cancer Ovary"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:esophagus: 2010",
				"display": "Anatomic Pathology Structured Report Cancer Esophagus"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:stomach: 2010",
				"display": "Anatomic Pathology Structured Report Cancer Stomach"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:liver:2010",
				"display": "Anatomic Pathology Structured Report Cancer Liver"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:pancreas: 2010",
				"display": "Anatomic Pathology Structured Report Cancer Pancreas"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:testis:2010",
				"display": "Anatomic Pathology Structured Report Cancer Testis"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
				"display": "Anatomic Pathology Structured Report Cancer Urinary Bladder"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
				"display": "Anatomic Pathology Structured Report Cancer Lip Oral Cavity"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:pharynx:2010",
				"display": "Anatomic Pathology Structured Report Cancer Pharynx"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
				"display": "Anatomic Pathology Structured Report Cancer Salivary Gland"
			},
			{
				"code": "urn:ihe:pat:apsr:cancer:larynx:2010",
				"display": "Anatomic Pathology Structured Report Cancer Larynx"
			},
			{
				"code": "urn:ihe:pharm:pre:2010",
				"display": "Pharmacy Pre"
			},
			{
				"code": "urn:ihe:pharm:padv:2010",
				"display": "Pharmacy PADV"
			},
			{
				"code": "urn:ihe:pharm:dis:2010",
				"display": "Pharmacy DIS"
			},
			{
				"code": "urn:ihe:pharm:pml:2013",
				"display": "Pharmacy PML"
			},
			{
				"code": "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
				"display": "For documents following C-CDA constraints using a structured body. "
			},
			{
				"code": "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
				"display": "For documents following C-CDA constraints using a non structured body. "
			}
		]
	}
];