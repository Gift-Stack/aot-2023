type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
	[U in keyof T]: Address
};
