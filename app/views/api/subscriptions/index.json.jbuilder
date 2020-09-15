@subscriptions.each do |sub|
    json.partial! "api/subscriptions/subscription", sub: sub
end