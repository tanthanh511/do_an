using Northwind.Shared;

namespace Northwind.WebApi.model;

    public class WardModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Content { get; set; }
        public double? Lon { get; set; }
        public double? Lat { get; set; }
        public List<Place>? Places { get; }


        public WardModel(Guid id, Ward ward)
        {
        Name = ward.Name;
        Description = ward.Description;
        Content = ward.Content;
        Lon = ward.Lon;
        Lat = ward.Lat;
        Places = GetPlaceListByWardId(id);
        }
    }



