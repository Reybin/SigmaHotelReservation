namespace HotelAPI.Data.Models
{
    public class AvailRoom
    {
        public string AvailToken { get; set; }
        public int RoomTypeId { get; set; }
        public RoomType RoomType { get; set; }
        public string RateCode { get; set; }
        public string Description { get; set; }
        public int QuanttityAvailable { get; set; }
        public int Nights { get; set; }
        public decimal Price { get; set; }
        public decimal PriceTaxes { get; set; }
        public decimal Taxes { get; set; }
        public decimal Total { get; set; }
    }
}