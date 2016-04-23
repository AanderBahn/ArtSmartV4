using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ArtSmartV4.Content
{
    [DataContract(Name = "Product")]
    [Serializable]
    public class ProductDTO
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public Nullable<decimal> Price { get; set; }
        [DataMember]
        public string Brand { get; set; }
        [DataMember]
        public string WorkingArea { get; set; }
        [DataMember]
        public int ResolutionId { get; set; }
        [DataMember]
        public string Sensitivity { get; set; }
        [DataMember]
        public string Material { get; set; }
        [DataMember]
        public string Version { get; set; }
        [DataMember]
        public string ImageUrl { get; set; }
        [DataMember]
        public int CategoryId { get; set; }
        [DataMember]
        public int ProductSpecId { get; set; }
    }
}