using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ArtSmartV4.Content
{
    [DataContract(Name = "CartItem")]
    [Serializable]
    public class CartItemDTO
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public int CartId { get; set; }
        [DataMember]
        public Nullable<int> ProductId { get; set; }
        [DataMember]
        public Nullable<int> Quantity { get; set; }

       
    }
}