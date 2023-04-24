import mongoose from "mongoose";

// Define schema
const adSchema = new mongoose.Schema({
  companyId: { type: Number},
  primaryText: { type: String },
  headline: { type: String, },
  description: { type: String },
  CTA: { type: String, },
  imageUrl: { type: String,}
});

// Create model
const Ad = mongoose.model('Ad', adSchema);

// Example document
const ad = new Ad([{
  companyId: 1,
  primaryText: "The world’s leading CRM is ready to help you simplify the business part of your small business.",
  headline: "Salesforce for Small Business",
  description: "",
  CTA: "Sign Up",
  imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
  
},
{
  companyId: 2,
  primaryText: "main the villain the sock  to help you simplify the.",
  headline: "Salesforce for Small Business",
  description: "",
  CTA: "Sign Up",
  imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
  
},
{ companyId: 3,
  primaryText: "those are the mo of the common simplify the business part of your small business.",
  headline: "Small bussiness",
  description: "",
  CTA: "Sign Up",
  imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
  },
  { companyId: 4,
    primaryText: "The world’s leading CRM is ready to help you simplify the business part of your small business.",
    headline: "sales to compamy",
    description: "",
    CTA: "Sign Up",
    imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
    },
  {
    companyId: 5,
    primaryText: "The world’s leading CRM is ready to help you simplify the business part of your small business.",
    headline: "not needed",
    description: "",
    CTA: "Sign Up",
    imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
    
  },
  { companyId: 6,
    primaryText: "The world’s leading CRM is ready to help you simplify the business part of your small business.",
    headline: "Sale amd markiting",
    description: "",
    CTA: "Sign Up",
    imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
    },
    {
      companyId: 7,
      primaryText: "The world’s leading CRM is ready to help you simplify the business part of your small business.",
      headline: "Salesforce for Small Business",
      description: "",
      CTA: "Sign Up",
      imageUrl: "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
      
    }
]);


export default mongoose.model("cards", adSchema);




